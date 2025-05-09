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
const ProjectRioPage: React.FC = () => {
  const featuresSectionRef = useRef(null);
  const isInViewFeatures = useInView(featuresSectionRef, { once: true, amount: 0.2 });

  // Project data
  const rioProject = {
    name: 'Project Rio',
    location: 'Ikeja',
    status: 'Ongoing',
    shortDescription: 'Located just 10 minutes from the international airport, Rio promises a premium living and investment experience in the heart of Ikeja.',
    description: 'Project Rio, at the heart of Ikeja, is a masterpiece of modern architecture designed to elevate the living experience. Thoughtfully crafted to suit diverse lifestyles, this exceptional property combines style, functionality, and innovation, making it the ideal choice for contemporary living.',
    sliderImages: [
      { id: '1', src: '/projects/project-rio/project-rio-2.jpg', alt: 'Rio Master Bedroom' },
      { id: '2', src: '/projects/project-rio/project-rio-3.jpg', alt: 'Rio Master Bedroom' },
      { id: '3', src: '/projects/project-rio/project-rio-4.jpg', alt: 'Rio Master Bedroom' },
      { id: '4', src: '/projects/project-rio-bo-properties.jpg', alt: 'Project Rio Exterior' },
      { id: '5', src: '/projects/project-rio/project-rio-5.jpg', alt: 'Rio Master Bedroom' },

    ],
    plans: [
      {
        id: 'studio',
        icon: '/icons/house.svg',
        iconColor: 'text-primary-blue-300',
        type: 'Studio Unit (17SQM)',
        size: '17sqm',
        price: '₦70,000,000',
        initialDeposit: '₦20,000,000',
        paymentDuration: '15months',
        features: [
          { text: 'Outright ownership' },
          { text: 'Ensuite rooms' },
          { text: 'Full furnishing' },
          { text: '12 Months free management' },
        ]
      },
      {
        id: 'one-bed',
        icon: '/icons/house.svg',
        iconColor: 'text-purple-600',
        type: 'One bedroom (33SQM)',
        size: '33 sqm',
        price: '₦99,000,000',
        initialDeposit: '₦30,000,000',
        paymentDuration: '15months',
        features: [
          { text: 'Outright ownership' },
          { text: 'Ensuite rooms' },
          { text: 'Full furnishing' },
          { text: '12 Months free management' },
        ]
      },
      {
        id: 'two-bed',
        icon: '/icons/house.svg',
        iconColor: 'text-blue-800',
        type: 'Two bedroom (33SQM)',
        size: '33 sqm',
        price: '₦205,000,000',
        initialDeposit: '₦50,000,000',
        paymentDuration: '15months',
        features: [
          { text: 'Outright ownership' },
          { text: 'Ensuite rooms' },
          { text: 'Full furnishing' },
          { text: '12 Months free management' },
        ]
      }
    ],
    relatedProjects: [
      {
        id: 'primero',
        title: 'Primero, Ilaje Bariga',
        slug: 'primero-ilaje-bariga',
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
      { id: '1', src: '/projects/project-rio/project-rio-2.jpg', alt: 'Rio Master Bedroom' },
      { id: '2', src: '/projects/project-rio/project-rio-3.jpg', alt: 'Rio Master Bedroom' },
      { id: '3', src: '/projects/project-rio/project-rio-4.jpg', alt: 'Rio Master Bedroom' },
      { id: '4', src: '/projects/project-rio/project-rio-5.jpg', alt: 'Rio Master Bedroom' },
      { id: '5', src: '/projects/project-rio-bo-properties.jpg', alt: 'Project Rio Exterior' },


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
          threeSixtyUrl="/projects/project-rio/360"
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
                    projectName="Project Rio" 
                    propertyType="luxury apartment"
                    brochureUrl="/brochures/project-rio.pdf" 
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
                  projectName="Project Rio"
                  title="About Project Rio"
                  description='Project Rio, at the heart of Ikeja, is a masterpiece of modern architecture designed to elevate the living experience. Thoughtfully crafted to suit diverse lifestyles, this exceptional property combines style, functionality, and innovation, making it the ideal choice for contemporary living.'
                />
                
                <KeyFeatures 
                  features={[
                    { icon: '/icons/interior.svg', text: 'Whole ground floor parking space' },
                    { icon: '/icons/kitchen.svg', text: 'Modern kitchen cabinets' },
                    { icon: '/icons/pool.svg', text: 'Swimming pool' },
                    { icon: '/icons/property-management.svg', text: 'Comprehensive property management options' },
                    { icon: '/icons/smart-home.svg', text: 'Smart home technology' },
                    { icon: '/icons/eco.svg', text: 'Eco friendly living' },
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

export default ProjectRioPage; 