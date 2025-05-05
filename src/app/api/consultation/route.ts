import { NextResponse } from 'next/server';
import * as postmark from 'postmark';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate the data
    if (!data.fullName || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create Postmark client with your server token
    const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN || '');
    
    // Send email using Postmark
    await client.sendEmail({
      From: process.env.FROM_EMAIL || 'contact@boproperties.com',
      To: 'bopropertiesng@gmail.com, admin@yourdomain.com',
      Subject: `New Consultation Request: ${data.service || 'General Inquiry'}`,
      HtmlBody: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service || 'Not specified'}</p>
        <p><strong>Message:</strong> ${data.message || 'No additional information provided.'}</p>
      `,
      TextBody: `
        New Consultation Request
        ---------------------------
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone}
        Service: ${data.service || 'Not specified'}
        Message: ${data.message || 'No additional information provided.'}
      `,
      MessageStream: "outbound"
    });
    
    // You can also send an auto-response to the user if you'd like
    await client.sendEmail({
      From: process.env.FROM_EMAIL || 'contact@boproperties.com',
      To: data.email,
      Subject: `Thank you for your consultation request, ${data.fullName}`,
      HtmlBody: `
        <h2>Thank You for Your Request</h2>
        <p>Dear ${data.fullName},</p>
        <p>We have received your consultation request regarding ${data.service || 'our services'}. 
        One of our experts will contact you shortly to discuss further.</p>
        <p>Best regards,<br>BO Properties Team</p>
      `,
      TextBody: `
        Thank You for Your Request
        ---------------------------
        Dear ${data.fullName},
        
        We have received your consultation request regarding ${data.service || 'our services'}. 
        One of our experts will contact you shortly to discuss further.
        
        Best regards,
        BO Properties Team
      `,
      MessageStream: "outbound"
    });
    
    // Return success response
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error processing consultation request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 