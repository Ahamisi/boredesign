'use client';

import React, { useState, useEffect } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: string;
  prefillMessage?: string;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  isOpen, 
  onClose,
  selectedService,
  prefillMessage = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: prefillMessage,
    acceptTerms: false,
    service: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Set selected service when modal opens
  React.useEffect(() => {
    if (isOpen && selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [isOpen, selectedService]);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      message: prefillMessage
    }));
  }, [prefillMessage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when field is filled
    if (formErrors[name] && value.trim() !== '') {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    
    if (formErrors[name] && checked) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      errors.fullName = "Please fill out this field.";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Please fill out this field.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Please fill out this field.";
    }
    
    if (!formData.acceptTerms) {
      errors.acceptTerms = "You must accept the terms and conditions.";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'consultation'
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }
      
      // Success
      setSubmitSuccess(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
      acceptTerms: false,
      service: ''
    });
    setFormErrors({});
    setSubmitSuccess(false);
    setSubmitError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40">
      <div 
        className="bg-white rounded-md w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {!submitSuccess ? (
          <div className="px-8 py-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">Schedule a Consultation</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                aria-label="Close modal"
                disabled={isSubmitting}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 mb-8">
              Kindly fill this form to reach out to a Consultant
            </p>

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                <p className="font-medium">Submission Error</p>
                <p>{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {selectedService && (
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service
                  </label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    value={formData.service}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md text-gray-800"
                    readOnly
                  />
                </div>
              )}

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Noah Naheem"
                  className="w-full p-4 border border-gray-200 rounded-md text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-blue-300"
                  required
                  disabled={isSubmitting}
                />
                {formErrors.fullName && (
                  <div className="mt-1 text-sm text-red-500">
                    {formErrors.fullName}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="noah@gmail.com"
                  className="w-full p-4 border border-gray-200 rounded-md text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-blue-300"
                  required
                  disabled={isSubmitting}
                />
                {formErrors.email && (
                  <div className="mt-1 text-sm text-red-500">
                    {formErrors.email}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="noah@gmail.com"
                  className="w-full p-4 border border-gray-200 rounded-md text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-blue-300"
                  required
                  disabled={isSubmitting}
                />
                {formErrors.phone && (
                  <div className="mt-1 text-sm text-red-500">
                    {formErrors.phone}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Type your Message"
                  className="w-full p-4 border border-gray-200 rounded-md text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary-blue-300"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 mt-0.5 text-primary-blue-300 focus:ring-primary-blue-200 border-gray-300 rounded"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Accept our Terms and Conditions
                  </span>
                </label>
                {formErrors.acceptTerms && (
                  <div className="mt-1 text-sm text-red-500">
                    {formErrors.acceptTerms}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-primary-blue-400 hover:bg-primary-blue-500'} text-white font-medium py-4 px-4 rounded-md transition-colors`}
              >
                {isSubmitting ? 'Processing...' : 'Submit'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-16 px-8">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your consultation request has been successfully submitted. 
              One of our representatives will contact you shortly.
            </p>
            <button 
              onClick={handleReset}
              className="bg-primary-blue-400 text-white py-3 px-6 rounded-md hover:bg-primary-blue-500 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal; 