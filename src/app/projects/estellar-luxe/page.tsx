'use client';

import React, { useRef } from 'react';
import Header from '@/app/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import ProjectSlider from '@/app/components/ProjectDetail/ProjectSlider';
import PricingPlans from '@/app/components/ProjectDetail/PricingPlans';
import RelatedProjects from '@/app/components/ProjectDetail/RelatedProjects';
import ProjectGallery from '@/app/components/ProjectDetail/ProjectGallery';
import AboutSection from '@/app/components/ProjectDetail/AboutSection';
import KeyFeatures from '@/app/components/ProjectDetail/KeyFeatures';
import ProjectActions from '@/app/components/ProjectDetail/ProjectActions';

// We'll implement a simple slider first to match what's shown in the image
const EstellarLuxePage: React.FC = () => {
  const featuresSectionRef = useRef(null);
  const isInViewFeatures = useInView(featuresSectionRef, { once: true, amount: 0.2 });

  // Project data
  const rioProject = {
    name: 'Estellar Luxe',
    location: 'Yaba',
    status: 'Ongoing',
    shortDescription: 'Perfectly positioned in the heart of Abule Oja, Akoka-Yaba, Estellar Luxe stands tall as the first building in the area to feature an apartment elevator, setting a new standard for luxury and convenience. Suitable if you’re an investor seeking high rental yield or a homeowner desiring a stylish, future-proof residence.',
    description: 'Estellar Luxe, at the heart of Ikeja, is a masterpiece of modern architecture designed to elevate the living experience. Thoughtfully crafted to suit diverse lifestyles, this exceptional property combines style, functionality, and innovation, making it the ideal choice for contemporary living.',
    sliderImages: [
      { id: '1', src: '/projects/estellar-luxe/estellar-luxe-2.jpeg', alt: 'Rio Master Bedroom' },
      { id: '2', src: '/projects/estellar-luxe/estellar-luxe-3.jpeg', alt: 'Rio Master Bedroom' },
      { id: '3', src: '/projects/estellar-luxe/estellar-luxe-4.jpeg', alt: 'Rio Master Bedroom' },
      { id: '4', src: '/projects/estellar-luxe-bo-properties.jpg', alt: 'Estellar Luxe Exterior' },
      { id: '5', src: '/projects/estellar-luxe/estellar-luxe-5.jpeg', alt: 'Rio Master Bedroom' },

    ],
    plans: [
      {
        id: 'studio',
        icon: '/icons/house.svg',
        iconColor: 'text-primary-blue-300',
        type: 'Studio Apartment  ',
        size: '30 sqm',
        price: '₦50,000,000',
        initialDeposit: '₦10,000,000',
        paymentDuration: '6–9 months',
        features: [
          { text: 'Outright ownership' },
          { text: 'Premium interior finishes' },
          { text: 'Flexible Payment Plan: Spread the balance over 6–9 months' },
          // { text: '12 Months free management' },
        ]
      },
      {
        id: 'one-bed',
        icon: '/icons/house.svg',
        iconColor: 'text-purple-600',
        type: 'One bedroom (80SQM)',
        size: '80 sqm',
        price: '₦80,000,000',
        initialDeposit: '₦20,000,000',
        paymentDuration: '6–9 months',
        features: [
          { text: 'Outright Ownership' },
          { text: 'Premium interior finishes' },
          { text: 'Flexible Payment Plan: Spread the balance over 6–9 months' },
          // { text: '12 Months free management' },
        ]
      },
      // {
      //   id: 'two-bed',
      //   icon: '/icons/house.svg',
      //   iconColor: 'text-blue-800',
      //   type: 'Two bedroom (33SQM)',
      //   size: '33 sqm',
      //   price: '₦205,000,000',
      //   initialDeposit: '₦50,000,000',
      //   paymentDuration: '15months',
      //   features: [
      //     { text: 'Outright ownership' },
      //     { text: 'Ensuite rooms' },
      //     { text: 'Full furnishing' },
      //     { text: '12 Months free management' },
      //   ]
      // }
    ],
    relatedProjects: [
      {
        id: 'primero',
        title: 'Primero, Ilaje Bariga',
        slug: 'primero',
        location: 'Ilaje, Bariga',
        description: 'Featuring highly-rated shortlets, Primero redefines hospitality and rental opportunities.',
        image: '/projects/project-primero-bo-properties.jpg',
      },
      {
        id: 'estellar',
        title: 'Estellar Prime',
        slug: 'estellar-prime',
        location: 'Abule Ijesha, Yaba',
        description: 'Featuring highly-rated shortlets, Primero redefines hospitality and rental opportunities.',
        image: '/projects/estellar-prime/estellar-prime.jpg',
      }
    ],
    galleryImages: [
      { id: '1', src: '/projects/estellar-luxe/estellar-luxe-2.jpeg', alt: 'Rio Master Bedroom' },
      { id: '2', src: '/projects/estellar-luxe/estellar-luxe-3.jpeg', alt: 'Rio Master Bedroom' },
      { id: '3', src: '/projects/estellar-luxe/estellar-luxe-4.jpeg', alt: 'Rio Master Bedroom' },
      { id: '4', src: '/projects/estellar-luxe/estellar-luxe-5.jpeg', alt: 'Rio Master Bedroom' },
      { id: '5', src: '/projects/estellar-luxe-bo-properties.jpg', alt: 'Estellar Luxe Exterior' },


    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isLightMode={true} />
      
      <main className='mt-25'>
        {/* Hero/Slider Image */}
        <ProjectSlider 
          images={rioProject.sliderImages}
          projectName={rioProject.name}
          hasThreeSixtyView={true}
          threeSixtyUrl="/projects/estellar-luxe/360"
        />
        
        {/* Project Features */}
        <motion.section 
          ref={featuresSectionRef}
          className="py-16 bg-white"
          initial={{ opacity: 0 }}
          animate={isInViewFeatures ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left column - Project details */}
              <div>
                <motion.h1 
                  className="text-4xl font-bold mb-5 text-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInViewFeatures ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {rioProject.name}
                </motion.h1>
                
                <motion.div 
                  className="flex flex-col space-y-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInViewFeatures ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="mb-2">
                    <span className="font-medium text-gray-700 mr-2">Location:</span>
                    <span className="text-gray-600">{rioProject.location}</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="font-medium text-gray-700 mr-2">Status:</span>
                    <span className="text-green-600 font-medium">{rioProject.status}</span>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-gray-600">{rioProject.shortDescription}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col space-y-3 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInViewFeatures ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >

                <ProjectActions 
                    projectName="Estellar Luxe" 
                    propertyType="luxury apartment"
                    brochureUrl="/brochures/ESTELLAR-LUXE-BROCHURE.pdf" 
                />
                  {/* <a 
                    href="#contact" 
                    className="px-6 py-3 bg-primary-blue-300 text-white rounded-md hover:bg-primary-blue-400 transition-colors text-center"
                  >
                    Reach out to a property consultant
                  </a>
                  <a 
                    href="#brochure" 
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-center"
                  >
                    Download Brochure
                  </a> */}
                </motion.div>
              </div>
              
              {/* Right column - About & Amenities */}
              <div>
                <AboutSection 
                  projectName="Estellar Luxe"
                  title="About Estellar Luxe"
                  description='Estellar Luxe is the new benchmark for elegance, comfort, and smart investing in Yaba. Designed for individuals with refined taste, this four-storey architectural masterpiece delivers a lifestyle experience that goes far beyond walls and windows.'
                />
                
                <KeyFeatures 
                  features={[
                    { icon: '/icons/interior.svg', text: 'Ample Car Parking' },
                    { icon: '/icons/kitchen.svg', text: 'Fully Equipped In-House Gym' },
                    { icon: '/icons/pool.svg', text: 'Exclusive Lounge Access' },
                    { icon: '/icons/property-management.svg', text: 'Elevator Access' },
                    { icon: '/icons/smart-home.svg', text: 'Smart Home Integration' },
                    { icon: '/icons/eco.svg', text: 'Premium Finishes' },
                  ]}
                />
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Pricing Plans */}
        <PricingPlans plans={rioProject.plans} />
        

        
        {rioProject.galleryImages && rioProject.galleryImages.length > 0 && (
          <ProjectGallery 
            images={rioProject.galleryImages} 
            title={rioProject.name} 
          />
        )}

        {/* Related Projects */}
        <RelatedProjects projects={rioProject.relatedProjects} />
      </main>
    </div>
  );
};

export default EstellarLuxePage; 