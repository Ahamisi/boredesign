'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import ProjectActions from './ProjectActions';

interface ProjectInfoProps {
  name: string;
  location: string;
  status: string;
  description: string;
  brochureUrl?: string;
}

interface FeatureItem {
  icon: string;
  text: string;
}

interface ProjectAmenitiesSectionProps {
  projectInfo: ProjectInfoProps;
  features: FeatureItem[];
  conclusionText?: string;
}

const ProjectAmenitiesSection: React.FC<ProjectAmenitiesSectionProps> = ({ 
  projectInfo, 
  features,
  conclusionText
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section ref={sectionRef} className="py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Project Info (Sticky only within this section) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {projectInfo.name}
              </h1>
              
              <div className="mb-4">
                <div className="flex items-start mb-2">
                  <span className="font-medium text-gray-700 mr-2 w-20">Location:</span>
                  <span className="text-gray-600">{projectInfo.location}</span>
                </div>
                
                <div className="flex items-start mb-2">
                  <span className="font-medium text-gray-700 mr-2 w-20">Status:</span>
                  <span className={`${
                    projectInfo.status.toLowerCase() === 'ongoing' 
                      ? 'text-green-600' 
                      : 'text-primary-blue-300'
                  } font-medium`}>
                    {projectInfo.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">
                {projectInfo.description}
              </p>
              
              <ProjectActions 
                projectName={projectInfo.name}
                propertyType="property"
                brochureUrl={projectInfo.brochureUrl}
              />
            </div>
          </div>
          
          {/* Right Column - Key Features */}
          <div className="lg:col-span-8">
            <motion.div 
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-700 mb-8">Key Features</h2>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 shrink-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                  >
                    <Image 
                      src={feature.icon} 
                      alt="" 
                      width={24} 
                      height={24} 
                      className="flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              
              {conclusionText && (
                <motion.p 
                  className="text-gray-600 mt-8 text-base leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {conclusionText}
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAmenitiesSection; 