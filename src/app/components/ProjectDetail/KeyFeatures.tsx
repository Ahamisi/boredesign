'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface FeatureItem {
  icon: string;
  text: string;
}

interface KeyFeaturesProps {
  features: FeatureItem[];
  conclusionText?: string;
}

const KeyFeatures: React.FC<KeyFeaturesProps> = ({ 
  features, 
  conclusionText
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={sectionRef}
      className="bg-white rounded-lg border border-gray-200 p-8 mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-700 mb-8">Key Features</h2>
      
      <div className="flex flex-wrap md:flex-wrap gap-4 mb-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 w-full md:w-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.05 * index }}
          >
            <Image 
              src={feature.icon} 
              alt="" 
              width={28} 
              height={28} 
              className="flex-shrink-0"
            />
            <span className="text-gray-700">{feature.text}</span>
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
  );
};

export default KeyFeatures; 