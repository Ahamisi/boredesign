'use client';

import React, { useState } from 'react';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
  acceptTerms?: string;
}

interface ContactFormProps {
  showHeader?: boolean;       // Whether to show the title and description
  containerStyles?: string;   // Custom container styles
  formWidth?: 'full' | 'half'; // Control the width
  buttonText?: string;        // Customize button text
  prefilledValues?: {         // Allow prefilled values
    fullName?: string;
    email?: string;
    phone?: string;
    inquiry?: string;
    message?: string;
  };
}

export default function ContactForm({ 
  showHeader = true, 
  containerStyles = "", 
  formWidth = 'half',
  buttonText = "Submit",
  prefilledValues = {}
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: prefilledValues.fullName || '',
    email: prefilledValues.email || '',
    phone: prefilledValues.phone || '',
    inquiry: prefilledValues.inquiry || '',
    message: prefilledValues.message || '',
    acceptTerms: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      acceptTerms: e.target.checked
    }));
    
    // Clear error when checkbox is changed
    if (errors.acceptTerms) {
      setErrors(prev => ({
        ...prev,
        acceptTerms: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate full name (at least 2 words)
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().split(' ').filter(word => word.length > 0).length < 2) {
      newErrors.fullName = 'Please enter both first and last name';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate phone (at least 10 digits)
    const phoneRegex = /^\d{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Validate message (minimum length)
    if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide a detailed message (at least 10 characters)";
    }
    
    // Validate terms acceptance on mobile
    if (window.innerWidth < 768 && !formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Option 1: Using Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          inquiry: '',
          message: '',
          acceptTerms: false
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (submitSuccess) {
    return (
      <div className={`${formWidth === 'full' ? 'w-full' : 'w-full md:w-1/2'} ${containerStyles} bg-white p-8 rounded-lg`}>
        <div className="text-center py-10">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your message has been received. We will get back to you shortly.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="bg-primary-blue-400 text-white py-2 px-6 rounded-full hover:bg-primary-blue-500 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`${formWidth === 'full' ? 'w-full' : 'w-full md:w-1/2'} ${containerStyles}`}>
      {showHeader && (
        <>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a message</h2>
          <p className="text-gray-600 mb-8">
            Kindly fill this form to send your message. We are available 24/7 to answer your questions
          </p>
        </>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-gray-700 mb-2">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-blue-300 text-gray-900`}
            placeholder="Noah Naheem"
          />
          {errors.fullName && <p className="mt-1 text-red-500 text-sm">{errors.fullName}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-blue-300 text-gray-900`}
            placeholder="noah@gmail.com"
          />
          {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-blue-300 text-gray-900`}
            placeholder="08012345678"
          />
          {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
        </div>
        
        <div>
          <label htmlFor="inquiry" className="block text-gray-700 mb-2">
            Nature of Inquiry
          </label>
          <div className="relative">
            <select
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue-300 appearance-none text-gray-900 bg-white"
            >
              <option value="">Select an option</option>
              <option value="property-sale">Property Sale</option>
              <option value="property-purchase">Property Purchase</option>
              <option value="property-management">Property Management</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2 md:hidden">
            Additional Information
          </label>
          <label htmlFor="message" className="block text-gray-700 mb-2 hidden md:block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-blue-300 text-gray-900`}
            placeholder="Type your Message"
          ></textarea>
          {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
        </div>
        
        <div className="flex items-center md:hidden">
          <input
            type="checkbox"
            id="terms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleCheckboxChange}
            className={`h-5 w-5 text-primary-blue-400 border-gray-300 focus:ring-primary-blue-300 ${errors.acceptTerms ? 'border-red-500' : ''}`}
          />
          <label htmlFor="terms" className="ml-2 block text-gray-700">
            Accept our Terms and Conditions
          </label>
          {errors.acceptTerms && <p className="mt-1 text-red-500 text-sm">{errors.acceptTerms}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-primary-blue-400 hover:bg-primary-blue-500'} text-white py-3 px-4 rounded-full transition-colors duration-300 flex justify-center items-center`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            buttonText
          )}
        </button>
      </form>
    </div>
  );
} 