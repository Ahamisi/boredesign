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
      { id: '1', src: '/projects/project-rio-bo-properties.jpg', alt: 'Project Rio Exterior' },
      { id: '2', src: '/projects/rio-living-room.jpg', alt: 'Rio Living Room' },
      { id: '3', src: '/projects/rio-bedroom.jpg', alt: 'Rio Master Bedroom' },
    ],
    amenities: [
      { icon: '/icons/parking.svg', title: 'Whole ground floor parking space' },
      { icon: '/icons/pool.svg', title: 'Swimming pool' },
      { icon: '/icons/property-management.svg', title: 'Property Management' },
      { icon: '/icons/kitchen.svg', title: 'Modern kitchen cabinets' },
      { icon: '/icons/smart-home.svg', title: 'Smart home technology' },
      { icon: '/icons/eco.svg', title: 'Eco friendly living' },
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
        iconColor: 'text-primary-blue-700',
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
      { id: 'g1', src: '/projects/rio-bedroom.jpg', alt: 'Rio Bedroom' },
      { id: 'g2', src: '/projects/rio-living-room.jpg', alt: 'Rio Living Room' },
      { id: 'g3', src: '/projects/rio-bedroom-2.jpg', alt: 'Rio Second Bedroom' },
      { id: 'g4', src: '/projects/rio-bathroom.jpg', alt: 'Rio Bathroom' },
      { id: 'g5', src: '/projects/rio-kitchen.jpg', alt: 'Rio Kitchen' },
      { id: 'g6', src: '/projects/rio-dining.jpg', alt: 'Rio Dining Area' },
      { id: 'g7', src: '/projects/rio-exterior.jpg', alt: 'Rio Exterior View' },
      { id: 'g8', src: '/projects/rio-balcony.jpg', alt: 'Rio Balcony' },
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isLightMode={true} />
      
      <main>
        {/* Hero/Slider Image */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          <div className="absolute top-4 left-4 z-10 flex items-center text-sm">
            <Link href="/projects" className="text-white hover:text-primary-blue-200">Projects</Link>
            <span className="mx-2 text-white">/</span>
            <span className="text-white">Rio</span>
          </div>

          <Image 
            src={rioProject.sliderImages[0].src} 
            alt={rioProject.sliderImages[0].alt}
            fill
            className="object-cover"
            priority
          />
          
          <Link 
            href="/projects/project-rio/360"
            className="absolute bottom-6 right-6 z-10 flex items-center text-white text-sm bg-primary-blue-300 px-4 py-2 rounded-full"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            360° View
          </Link>
        </div>
        
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
                  projectName="Estellar Prime"
                  title="About Estellar Prime"
                  description="Estellar Prime is a stunning masterpiece of modern architecture, crafted to offer an exceptional blend of comfort, luxury, and elegance. Designed with the investor in mind, it provides flexibility to suit varying budgets and investment appetites. With a 22-year long lease offering returns of up to ₦80 million, Estellar Prime is an opportunity that redefines the concept of investment and living."
                />
                
                <KeyFeatures 
                  features={[
                    { icon: '/icons/interior.svg', text: 'Fully furnitured interiors' },
                    { icon: '/icons/pop.svg', text: 'Elegant POP ceilings' },
                    { icon: '/icons/tiling.svg', text: 'Stylish full tiling' },
                    { icon: '/icons/cctv.svg', text: '24/7 security' },
                    { icon: '/icons/generator.svg', text: 'Central power generator for uninterrupted electricity' },
                    { icon: '/icons/electric-meters.svg', text: 'Personalized electricity meters' },
                    { icon: '/icons/cctv.svg', text: 'Advanced CCTV surveillance for security' },
                    { icon: '/icons/kitchen.svg', text: 'Modern kitchen cabinets' },
                    { icon: '/icons/parking.svg', text: 'Ample parking space' },
                    { icon: '/icons/property-management.svg', text: 'Comprehensive property management options' },
                    { icon: '/icons/smart-home.svg', text: 'Alexa-powered home automation' },
                    { icon: '/icons/inverter.svg', text: 'Private inverter for personalized power backup' },
                    { icon: '/icons/water-heater.svg', text: 'Water heater for ultimate convenience' },
                  ]}
                  conclusionText="Estellar Prime is more than just a residence—it's a lifestyle statement. With its state-of-the-art furnishings, innovative features, and the comfort of a luxury retreat, it sets a new standard for contemporary living and investment."
                />
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Pricing Plans */}
        <PricingPlans plans={rioProject.plans} />
        
        {/* Related Projects */}
        <RelatedProjects projects={rioProject.relatedProjects} />
        
        {/* Project Gallery - Only if there are gallery images */}
        {rioProject.galleryImages && rioProject.galleryImages.length > 0 && (
          <ProjectGallery 
            images={rioProject.galleryImages} 
            title={rioProject.name} 
          />
        )}
      </main>
    </div>
  );
};

export default ProjectRioPage; 