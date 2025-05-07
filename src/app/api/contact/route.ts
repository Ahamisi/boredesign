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
      To: 'sales@bopropertiesng.com',
      Subject: `New Contact Form Submission: ${data.inquiry || 'General Inquiry'}`,
      HtmlBody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Inquiry:</strong> ${data.inquiry || 'Not specified'}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
      TextBody: `
        New Contact Form Submission
        ---------------------------
        Name: ${data.fullName}
        Email: ${data.email}
        Phone: ${data.phone}
        Inquiry: ${data.inquiry || 'Not specified'}
        Message: ${data.message}
      `,
      MessageStream: "outbound"
    });
    
    // Return success response
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 