'use client';

import React, { useState, useRef } from 'react';
import ConsultationModal from './ConsultationModal';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onConsultClick: (service: string) => void;
  isWide?: boolean;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  onConsultClick, 
  isWide = false,
  index
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div 
      ref={cardRef}
      className={`backdrop-blur-sm p-8 rounded-lg flex flex-col h-full ${isWide ? 'col-span-3' : 'col-span-2'}`} 
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: 0.1 * index }}
    >
      <motion.div 
        className="bg-white/10 h-14 w-14 rounded-full flex items-center justify-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 + (0.1 * index) }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-white mb-5"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + (0.1 * index) }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-white/90 mb-auto pb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 + (0.1 * index) }}
      >
        {description}
      </motion.p>
      
      <motion.div 
        className="mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
      >
        <button 
          onClick={() => onConsultClick(title)}
          className="text-white hover:text-white group inline-flex items-center"
        >
          <span className="border-b border-white/40 group-hover:border-white pb-1 transition-all flex items-center">
            Talk to a Consultant 
            <motion.svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M13 5L20 12L13 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });

  const handleConsultClick = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // Service data
  const services = [
    {
      id: 'service1',
      icon: <Image src="/icons/property-dev.svg" alt="Building" width={28} height={28} />,
      isWide: true,
      title: "Property Development and Construction",
      description: "At BO Properties, we offer luxury real estate property investment opportunities tailored for savvy investors looking to secure the future of consistent financial inflow through real estate. We focus on delivering innovative and sustainable housing solutions in prime locations across Lagos.",
    },
    {
      id: 'service2',
      icon: <Image src="/icons/money-change.svg" alt="Money Change" width={28} height={28} />,
      isWide: false,
      title: "Property Sales and Leasing",
      description: "BO Properties assists clients in selling or leasing properties, offering seamless processes and ensuring the best options are available for tenants and landlords.",
    },
    {
      id: 'service3',
      icon: <Image src="/icons/messages.svg" alt="Messages" width={28} height={28} />,
      isWide: false,
      title: "Real Estate Consultancy",
      description: "BO Properties offers expert guidance on property investment, strategic buying, and maximizing returns. Let us help you make the best real estate decisions and navigate the real estate market with confidence.",
    },
    {
      id: 'service4',
      icon: <Image src="/icons/buildings.svg" alt="Building" width={28} height={28} />,
      isWide: true,
      title: "Facility Management",
      description: "At BO Properties, our commitment doesn't end after the sale. We remain your trusted partner, providing expert advice and dedicated personnel to manage and enhance your property for long-term value, returns and sustainability.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-primary-blue-400">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          ref={headerRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-white/90 text-lg max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our real estate business specializes in the buying, selling, renting, leasing and management of land and buildings. We 
            have multiple estates at various stages of development within the Lagos.
          </motion.p>
        </motion.div>
        
        {/* Using a 5-column grid to get the 60%:40% ratio */}
        <div className="grid grid-cols-5 gap-6 md:gap-8">
          {/* First row */}
          <div className="col-span-5 md:col-span-3 h-full">
            <ServiceCard 
              icon={services[0].icon}
              title={services[0].title}
              description={services[0].description}
              onConsultClick={handleConsultClick}
              isWide={true}
              index={0}
            />
          </div>
          <div className="col-span-5 md:col-span-2 h-full">
            <ServiceCard 
              icon={services[1].icon}
              title={services[1].title}
              description={services[1].description}
              onConsultClick={handleConsultClick}
              isWide={false}
              index={1}
            />
          </div>
          
          {/* Second row */}
          <div className="col-span-5 md:col-span-2 h-full">
            <ServiceCard 
              icon={services[2].icon}
              title={services[2].title}
              description={services[2].description}
              onConsultClick={handleConsultClick}
              isWide={false}
              index={2}
            />
          </div>
          <div className="col-span-5 md:col-span-3 h-full">
            <ServiceCard 
              icon={services[3].icon}
              title={services[3].title}
              description={services[3].description}
              onConsultClick={handleConsultClick}
              isWide={true}
              index={3}
            />
          </div>
        </div>
      </div>
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedService={selectedService}
      />
    </section>
  );
};

export default ServicesSection; 