'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.5 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }
    
    setIsSubmitting(true);
    setMessage('');
    setMessageType(null);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setMessageType('success');
        setEmail('');
      } else {
        // Handle known Mailchimp errors
        if (data.error && data.error.includes('already subscribed')) {
          setMessage('You\'re already subscribed to our newsletter!');
          setMessageType('success');
        } else {
          setMessage(data.error || 'Something went wrong. Please try again later.');
          setMessageType('error');
        }
      }
    } catch (err) {
      setMessage('Something went wrong. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative">
      {/* Background image with overlay and parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: isInView ? 0 : 20 }}
        animate={isInView ? { y: 0 } : { y: 20 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image 
          src="/bo-slider-5.jpg" 
          alt="Property" 
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          ref={headerRef}
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Subscribe to Our Newsletter!
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sign Up To Receive The Latest Updates And News
          </motion.p>
          
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 rounded-full border-0 text-gray-800 placeholder-gray-400 bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-primary-blue-300 focus:outline-none"
                  placeholder="noah@gmail.com"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-primary-blue-300 rounded-full hover:bg-primary-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue-500 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Subscribe"}
              </motion.button>
            </div>
            
            {message && (
              <motion.div 
                className={`mt-4 text-sm ${messageType === 'success' ? 'text-green-300' : 'text-red-300'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {message}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection; 