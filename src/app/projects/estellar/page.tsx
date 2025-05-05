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
    name: 'Estellar',
    location: 'Akoka, Yaba',
    status: 'Completed',
    shortDescription: 'Project ESTELLAR is an exquisite apartment building situated in the heart of Akoka.',
    // description: "Estellar Prime is a stunning masterpiece of modern architecture, crafted to offer an exceptional blend of comfort, luxury, and elegance. Designed with the investor in mind, it provides flexibility to suit varying budgets and investment appetites. With a 22-year long lease offering returns of up to ₦80 million, Estellar Prime is an opportunity that redefines the concept of investment and living.",
    sliderImages: [
      { id: '0', src: '/projects/estellar/estellar-finished-1.jpg', alt: 'Estellar Exterior' },
      { id: '1', src: '/projects/estellar/estellar-finished-2.jpg', alt: 'Estellar Exterior' },
      { id: '2', src: '/projects/estellar/estellar-finished-3.jpg', alt: 'Estellar Exterior' },
      { id: '4', src: '/projects/estellar-1.jpg', alt: 'Estellar Exterior' },
      { id: '5', src: '/projects/estellar-2.jpg', alt: 'Estellar Living Room' },
      { id: '6', src: '/projects/estellar-3.jpg', alt: 'Estellar Master Bedroom' },
      { id: '7', src: '/projects/estellar-4.jpg', alt: 'Estellar Master Bedroom' },

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
      { id: '0', src: '/projects/estellar/estellar-finished-1.jpg', alt: 'Estellar Exterior' },
      { id: '1', src: '/projects/estellar/estellar-finished-2.jpg', alt: 'Estellar Exterior' },
      { id: '2', src: '/projects/estellar/estellar-finished-3.jpg', alt: 'Estellar Exterior' },
      { id: '4', src: '/projects/estellar-1.jpg', alt: 'Estellar Exterior' },
      { id: '5', src: '/projects/estellar-2.jpg', alt: 'Estellar Living Room' },
      { id: '6', src: '/projects/estellar-3.jpg', alt: 'Estellar Master Bedroom' },
      { id: '7', src: '/projects/estellar-4.jpg', alt: 'Estellar Master Bedroom' },
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
                    brochureUrl="/brochures/PROJECT-ESTELLAR-BROCHURE.pdf" 
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
                  projectName="Estellar"
                  title="About Project Rio"
                  description='Estellar is situated in a strategic area at the Ilaje axis of Akoka, this location houses over 70,000 thousand students yearly. 16 minutes drive to the Murtala Muhammed International Airport, good road network and quick access to the third '
                />
                
                <KeyFeatures 
                  features={[
                    { icon: '/icons/interior.svg', text: 'Standard Rooms' },
                    { icon: '/icons/pop.svg', text: 'Elegant POP ceilings' },
                    { icon: '/icons/tiling.svg', text: 'Stylish full tiling' },
                    { icon: '/icons/cctv.svg', text: '24/7 security' },
                    { icon: '/icons/kitchen.svg', text: 'Modern kitchen cabinets' },
                    { icon: '/icons/property-management.svg', text: 'Comprehensive property management options' },
                  ]}
                  conclusionText="Project ESTELLAR is an exquisite apartment building situated in the heart of Akoka. It contains blocks of Studio apartments and One bedroom apartments each put up for a 20 years lease. "
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