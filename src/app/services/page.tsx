import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';

// Services data
const services = [
  {
    id: 'development',
    title: 'Property Development and Construction',
    slug: 'development',
    image: '/images/services/development-hero.jpg',
    description: 'Luxury property investment opportunities in prime locations across Lagos.'
  },
  {
    id: 'sales',
    title: 'Property Sales and Leasing',
    slug: 'sales',
    image: '/images/services/sales-hero.jpg',
    description: 'Seamless processes for selling or leasing properties with the best options.'
  },
  {
    id: 'consultancy',
    title: 'Real Estate Consultancy',
    slug: 'consultancy',
    image: '/images/services/consultancy-hero.jpg',
    description: 'Expert guidance on property investments and market analysis.'
  },
  {
    id: 'management',
    title: 'Facility Management',
    slug: 'management',
    image: '/images/services/management-hero.jpg',
    description: 'Comprehensive facility management to maintain property value.'
  }
];

export const metadata = {
  title: 'Our Services | BO Properties',
  description: 'Explore the range of real estate services offered by BO Properties including development, sales, consultancy, and facility management.',
};

export default function ServicesPage() {
  return (
    <>
      <Header isLightMode={true} />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-[#053B6E]">
        <Image 
          src="/images/services/services-hero.jpg"
          alt="BO Properties Services"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Comprehensive real estate solutions tailored to meet your property needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.slug}`}
                className="block group"
              >
                <div className="relative h-96 overflow-hidden rounded-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h2 className="text-2xl font-semibold text-white mb-2">
                      {service.title}
                    </h2>
                    <p className="text-white/90">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-block text-white border-b border-white pb-1">
                      Learn more
                    </div>
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