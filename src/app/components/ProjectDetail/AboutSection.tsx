'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AboutSectionProps {
  title: string;
  description: string;
  projectName: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description, projectName }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={sectionRef}
      className="bg-white rounded-lg border border-gray-200 p-8 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-700 mb-4">About {projectName}</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default AboutSection; 