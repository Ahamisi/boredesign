'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={cardRef}
      className="bg-[#FAFAFA] rounded-lg p-8 shadow-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <motion.div 
        className="mb-5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 + (0.1 * index) }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: 0.3 + (0.1 * index) }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.4 + (0.1 * index) }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are dedicated to upholding the highest standards of excellence and integrity
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Excellence */}
          <FeatureCard 
            icon={<Image src="/icons/star.svg" alt="Star" width={40} height={40} />}
            title="Excellence"
            description="We don't just aim high, we deliver. From Property development to maintenance, excellence is the standard we never compromise."
            index={0}
          />
          
          {/* Unique Solution */}
          <FeatureCard 
            icon={<Image src="/icons/magicpen.svg" alt="Star" width={40} height={40} />}
            title="Unique Solution"
            description="We offer a smarter, simpler way to invest in real estate and build projects tailored to your goals and lifestyle"
            index={1}
          />
          
          {/* 24/7 */}
          <FeatureCard 
            icon={<Image src="/icons/24-support.svg" alt="247 support" width={40} height={40} />}
            title="24/7"
            description="We're always here. Our dedicated support team is available round the clock to guide you every step of the way."
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 