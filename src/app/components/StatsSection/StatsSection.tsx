'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  // Extract numeric value and suffix
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));
  const suffix = number.replace(/[0-9]/g, '');
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(end / (duration / 16)); // Update roughly every 16ms for 60fps
      
      // Don't start at 0
      const timer = setInterval(() => {
        start = Math.min(start + increment, end);
        setCount(start);
        
        if (start === end) {
          clearInterval(timer);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);
  
  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center md:items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-blue-200 mb-2">
        {isInView ? `${count}${suffix}` : number}
      </h3>
      <motion.p 
        className="text-gray-700 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f7fbff]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Bringing you luxury and Comfort
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-8 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              BO Properties is a forward-thinking real estate company committed to
              transforming the landscape of property investment and development across
              Nigeria. With a core focus on delivering premium accommodation solutions and
              lucrative investment opportunities, we pride ourselves on crafting spaces that
              seamlessly combine luxury, convenience, and sustainability.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/about-us"
                className="inline-flex items-center gap-2 bg-primary-blue-200 hover:bg-primary-blue-300 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
              >
                Learn more About Us
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform translate-y-px"
                >
                  <path 
                    d="M4.16669 10H15.8334" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M10 4.16669L15.8333 10L10 15.8334" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <StatItem number="7+" label="Listed Properties" delay={0.1} />
            <StatItem number="4+" label="Projects Completed" delay={0.3} />
            <StatItem number="50+" label="Facilities Managed" delay={0.5} />
            <StatItem number="7+" label="Properties Sold" delay={0.7} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 