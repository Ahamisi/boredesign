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
    name: 'Queens Court',
    location: 'Akoka, Yaba',
    status: 'Completed',
    shortDescription: 'Crafted for comfort and class; offers students an elevated living experience',
    // description: "Estellar Prime is a stunning masterpiece of modern architecture, crafted to offer an exceptional blend of comfort, luxury, and elegance. Designed with the investor in mind, it provides flexibility to suit varying budgets and investment appetites. With a 22-year long lease offering returns of up to ₦80 million, Estellar Prime is an opportunity that redefines the concept of investment and living.",
    sliderImages: [
        { id: '1', src: '/projects/queens-court-1.jpg', alt: 'Queens Court Exterior' },
        { id: '2', src: '/projects/queens-court-hostel-2.jpg', alt: 'Queens Court Hostel' },
        { id: '3', src: '/projects/queens-court-hostel-3.jpg', alt: 'Queens Court Hostel' },
        { id: '4', src: '/projects/queens-court-hostel-4.jpg', alt: 'Queens Court Hostel' },
    ],
    plans: [
    
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
        image: '/projects/estellar-prime-bo-properties.jpg',
      }
    ],
    galleryImages: [
        { id: '1', src: '/projects/queens-court-1.jpg', alt: 'Queens Court Exterior' },
        { id: '2', src: '/projects/queens-court-hostel-2.jpg', alt: 'Queens Court Hostel' },
        { id: '3', src: '/projects/queens-court-hostel-3.jpg', alt: 'Queens Court Hostel' },
        { id: '4', src: '/projects/queens-court-hostel-4.jpg', alt: 'Queens Court Hostel' },
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
                    projectName="Queens Court" 
                    propertyType="luxury apartment"
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
                  projectName="Queens Court"
                  title="About Project Rio"
                  description='Estellar Prime is a stunning masterpiece of modern architecture, crafted to offer an exceptional blend of comfort, luxury, and elegance. Designed with the investor in mind, it provides flexibility to suit varying budgets and investment appetites. With a 22-year long lease offering returns of up to ₦80 million, Estellar Prime is an opportunity that redefines the concept of investment and living.'
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