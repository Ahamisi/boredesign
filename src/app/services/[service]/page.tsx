import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import ContactForm from '@/app/components/Contact/ContactForm';

// Define service data structure
interface ServiceData {
  id: string;
  title: string;
  slug: string;
  hero: string;
  description: string;
  formHeading: string;
  formSubheading: string;
}

// Service data for all 4 services
const services: ServiceData[] = [
  {
    id: 'property-purchase',
    title: 'Property Development and Construction',
    slug: 'development',
    hero: '/services/development-hero.png',
    description: 'At BO Properties, we offer luxury real estate property investment opportunities tailored for savvy investors looking to secure the future of consistent financial inflow through real estate. We focus on delivering innovative and sustainable housing solutions in prime locations across Lagos.',
    formHeading: 'Do you want a unique and stylish Property?',
    formSubheading: 'Fill out the form to learn more about our development opportunities.',
  },
  {
    id: 'property-sale',
    title: 'Property Sales and Leasing',
    slug: 'sales',
    hero: '/services/sales-hero.png',
    description: 'BO Properties assists clients in selling or leasing properties, offering seamless processes and ensuring the best options are available for tenants and landlords.',
    formHeading: 'Got a property you want to sell or lease?',
    formSubheading: 'Reach out to us to get started on your property journey.',
  },
  {
    id: 'consultation',
    title: 'Real Estate Consultancy',
    slug: 'consultancy',
    hero: '/services/consultancy-hero.png',
    description: 'Our expert real estate consultants provide guidance on property investments, market analysis, and acquisition strategies. We help you make informed decisions based on market trends and insights.',
    formHeading: 'Need Guidance or resources?',
    formSubheading: 'Our consultants are ready to assist with your real estate needs.',
  },
  {
    id: 'property-management',
    title: 'Facility Management',
    slug: 'management',
    hero: '/services/management-hero.png',
    description: 'We provide comprehensive facility management services to ensure your property maintains its value and operates efficiently. From maintenance to tenant relations, we handle it all.',
    formHeading: 'Need Guidance or resources?',
    formSubheading: 'Let us handle the day-to-day management of your property.',
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { service: string } }) {
  // Await the params before using them
  const serviceSlug = await params.service;
  console.log('Service slug:', serviceSlug);
  
  const service = services.find(s => s.slug === serviceSlug);
  console.log('Found service:', service);
  
  if (!service) {
    return {  
      title: 'Service Not Found | BO Properties',
    };
  }
  
  return {
    title: `${service.title} | BO Properties`,
    description: service.description,
  };
}

// Generate static params for all services
export function generateStaticParams() {
  return services.map(service => ({
    service: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: { service: string } }) {
  // Await the params
  const serviceSlug = await params.service;
  const service = services.find(s => s.slug === serviceSlug);
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  // Filter other services (excluding current one)
  const otherServices = services.filter(s => s.id !== service.id);
  
  return (
    <>
      <Header isLightMode={true} />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Image 
          src={service.hero}
          alt={service.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container mx-auto px-4 pb-20">
            <div className="breadcrumbs text-white/80 mb-4">
              <Link href="/services" className="hover:text-white">Services</Link>
              <span className="mx-2">»</span>
              <span>{service.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
          </div>
        </div>
      </section>
      
      {/* Main Content and Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="text-[#053B6E] uppercase tracking-wide font-semibold mb-3 bg-[#E4F0FB] rounded-full p-[8px] w-fit">
                {service.title}
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {service.formHeading}
              </h2>
              
              <div className="prose max-w-none text-gray-700">
                <p>{service.description}</p>
              </div>
              
              {/* Mobile form will show here */}
              <div className="mt-8 block lg:hidden">
                <h3 className="text-xl font-semibold mb-2 text-black">Send us a message</h3>
                <p className="text-gray-600 mb-4">
                  Kindly fill this form to send your message. We are available 24/7 to answer your questions.
                </p>
                <ContactForm 
                  showHeader={false}
                  formWidth="full"
                  prefilledValues={{ inquiry: service.id }}
                />
              </div>
            </div>
            
            {/* Desktop Form */}
            <div className="w-full lg:w-1/2 hidden lg:block">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-2 text-black">Send us a message</h3>
                <p className="text-gray-600 mb-6">
                  Kindly fill this form to send your message. We are available 24/7 to answer your questions.
                </p>
                <ContactForm 
                  showHeader={false} 
                  formWidth="full" 
                  containerStyles="" 
                  prefilledValues={{ inquiry: service.id }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Other Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((otherService) => (
              <Link 
                key={otherService.id} 
                href={`/services/${otherService.slug}`}
                className="block group"
              >
                <div className="relative h-72 overflow-hidden rounded-lg">
                  <Image
                    src={otherService.hero}
                    alt={otherService.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {otherService.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
} 