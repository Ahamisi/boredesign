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
const ProjectEvaraPage: React.FC = () => {
  const featuresSectionRef = useRef(null);
  const isInViewFeatures = useInView(featuresSectionRef, { once: true, amount: 0.2 });

  // Project data
  const EvaraProject = {
    name: 'Project Evara',
    location: ' Lagos Mainland, Yaba',
    status: 'Completed',
    shortDescription: 'Evara is a thoughtfully crafted residential community in the heart of Yaba, offering modern luxury, convenience, and strong investment potential with easy access to Lagos Mainland’s key business, education, and innovation hubs.',
    description: 'Project Evara is BO Properties’ newest residential masterpiece in the heart of Yaba. Conceived in response to the growing demand for premium apartments in Lagos Mainland, Evara combines contemporary architecture, strategic positioning, and long-term investment value in one exceptional development.',
    sliderImages: [
      { id: '1', src: '/projects/project-evara/EVARA FRONT NIGHT VIEW.png', alt: 'Evara Master Bedroom' },
      { id: '2', src: '/projects/project-evara/EVARA FRONT VIEW.png', alt: 'Evara Master Bedroom' },
      { id: '3', src: '/projects/project-evara/EVARA SIDE VIEW 1 DAY.png', alt: 'Evara Master Bedroom' },
      { id: '4', src: '/projects/project-evara/EVARA SIDE VIEW 1 NIGHT.png', alt: 'Project Evara ExteEvarar' },
      { id: '5', src: '/projects/project-evara/EVARA SIDE VIEW 2 NIGHT.png', alt: 'Evara Master Bedroom' },



    ],
    plans: [
      {
        id: 'studio',
        icon: '/icons/house.svg',
        iconColor: 'text-primary-blue-300',
        type: 'Studio Apartment ',
        size: '17sqm',
        price: ' ₦50,000,000 ',
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
        price: '₦80,000,000',
        initialDeposit: '₦30,000,000',
        paymentDuration: '15months',
        features: [
          { text: 'Outright ownership' },
          { text: 'Ensuite rooms' },
          { text: 'Full furnishing' },
          { text: '12 Months free management' },
        ]
      },
      // {
      //   id: 'two-bed',
      //   icon: '/icons/house.svg',
      //   iconColor: 'text-blue-800',
      //   type: 'Projected Investment Returns ',
      //   size: 'Evara offers multiple income opportunities tailored to different investment goals: ',
      //   // price: '₦205,000,000',
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
      { id: '1', src: '/projects/project-Evara/EVARA FRONT VIEW.png', alt: 'Evara Master Bedroom' },
      { id: '2', src: '/projects/project-Evara/EVARA SIDE VIEW 1 NIGHT.png', alt: 'Evara Master Bedroom' },
      { id: '3', src: '/projects/project-Evara/EVARA SIDE VIEW 2 NIGHT.png', alt: 'Evara Master Bedroom' },
      { id: '4', src: '/projects/project-Evara/EVARA FRONT NIGHT VIEW.png', alt: 'Evara Master Bedroom' },
      // { id: '5', src: '/projects/project-Evara-bo-properties.jpg', alt: 'Project Evara ExteEvarar' },


    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isLightMode={true} />
      
      <main className='mt-25'>
        {/* Hero/Slider Image */}
        <ProjectSlider 
          images={EvaraProject.sliderImages}
          projectName={EvaraProject.name}
          hasThreeSixtyView={true}
          threeSixtyUrl="/projects/project-Evara/360"
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
                  {EvaraProject.name}
                </motion.h1>
                
                <motion.div 
                  className="flex flex-col space-y-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInViewFeatures ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="mb-2">
                    <span className="font-medium text-gray-700 mr-2">Location:</span>
                    <span className="text-gray-600">{EvaraProject.location}</span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="font-medium text-gray-700 mr-2">Status:</span>
                    <span className="text-green-600 font-medium">{EvaraProject.status}</span>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-gray-600">{EvaraProject.shortDescription}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col space-y-3 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInViewFeatures ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >

                <ProjectActions 
                    projectName="Project Evara" 
                    propertyType="luxury apartment"
                    brochureUrl="/brochures/project-Evara.pdf" 
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
                  projectName="Project Evara"
                  title="About Project Evara"
                  description= 'Project Evara is BO Properties’ newest residential masterpiece in the heart of Yaba. Conceived in response to the growing demand for premium apartments in Lagos Mainland, Evara combines contemporary architecture, strategic positioning, and long-term investment value in one exceptional development.'
                />
                
                <KeyFeatures 
                  features={[
                    { icon: '/icons/elevator.png', text: 'Elevator access' },
                    { icon: '/icons/24-7.png', text: '24/7 CCTV surveillance and security' },
                    { icon: '/icons/smart-home.svg', text: 'Smart home features ' },
                    { icon: '/icons/weight.png', text: 'Fully equipped gym' },
                    { icon: '/icons/parking.png', text: 'Spacious parking area' },
                    { icon: '/icons/solar-panel.png', text: 'Solar and inverter backup systems' },
                    { icon: '/icons/kitchen.svg', text: 'Fitted kitchen' },
                    { icon: '/icons/work-life-balance.png', text: 'Proximity to major commercial and lifestyle hubs ' },
                  ]}
                />
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Pricing Plans */}
        <PricingPlans plans={EvaraProject.plans} />
        

        
        {EvaraProject.galleryImages && EvaraProject.galleryImages.length > 0 && (
          <ProjectGallery 
            images={EvaraProject.galleryImages} 
            title={EvaraProject.name} 
          />
        )}

        {/* Related Projects */}
        <RelatedProjects projects={EvaraProject.relatedProjects} />
      </main>
    </div>
  );
};

export default ProjectEvaraPage; 