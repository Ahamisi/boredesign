'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface FeatureItem {
  icon: string;
  title: string;
}

interface ProjectFeaturesProps {
  title: string;
  description: string;
  location: string;
  status: string;
  shortDescription: string;
  amenities: FeatureItem[];
}

const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({
  title,
  description,
  location,
  status,
  shortDescription,
  amenities
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <motion.section 
      ref={sectionRef}
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column - Project details */}
          <div>
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-5 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            
            <motion.div 
              className="flex flex-col space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div>
                <span className="font-medium text-gray-700 mr-2">Location:</span>
                <span className="text-gray-600">{location}</span>
              </div>
              
              <div>
                <span className="font-medium text-gray-700 mr-2">Status:</span>
                <span className={`${status.toLowerCase() === 'ongoing' ? 'text-primary-blue-300' : 'text-green-600'}`}>
                  {status}
                </span>
              </div>
              
              <div>
                <p className="text-gray-600">{shortDescription}</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex space-x-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary-blue-300 text-white rounded-md hover:bg-primary-blue-400 transition-colors"
              >
                Reach out to a property consultant
              </a>
              <a 
                href="#brochure" 
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Download Brochure
              </a>
            </motion.div>
          </div>
          
          {/* Right column - About & Amenities */}
          <div>
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">About {title}</h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  >
                    <Image 
                      src={amenity.icon} 
                      alt={amenity.title} 
                      width={24} 
                      height={24} 
                      className="text-primary-blue-300"
                    />
                    <span className="text-gray-700">{amenity.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectFeatures; 