import React from 'react';
import Header from '../components/Header/Header';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Footer/Footer';
import ContactInfo from '../components/Contact/ContactInfo';

export const metadata = {
  title: 'Contact Us | BO Properties',
  description: 'Get in touch with BO Properties for real estate inquiries, property management services, and more.',
};

export default function ContactPage() {
  return (
    <>
      <Header isLightMode={true} />
      <main className="pt-20 min-h-screen bg-white mt-10">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <ContactInfo />
            <ContactForm showHeader={true} formWidth="half" />
          </div>
        </div>
      </main>
    </>
  );
} 