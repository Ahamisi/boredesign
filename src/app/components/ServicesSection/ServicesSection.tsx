'use client';

import React, { useState } from 'react';
import ConsultationModal from './ConsultationModal';
import Image from 'next/image';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onConsultClick: (service: string) => void;
  isWide?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  onConsultClick, 
  isWide = false 
}) => {
  return (
    <div 
      className={`backdrop-blur-sm p-8 rounded-lg flex flex-col h-full ${isWide ? 'col-span-3' : 'col-span-2'}`} 
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      <div className="bg-white/10 h-14 w-14 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-5">{title}</h3>
      
      <p className="text-white/90 mb-auto pb-10 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-auto">
        <button 
          onClick={() => onConsultClick(title)}
          className="text-white hover:text-white group inline-flex items-center"
        >
          <span className="border-b border-white/40 group-hover:border-white pb-1 transition-all flex items-center">
            Talk to a Consultant 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M13 5L20 12L13 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleConsultClick = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // Service data
  const services = [
    {
      id: 'service1',
      icon: <Image src="/icons/property-dev.svg" alt="Building" width={28} height={28} />,
    //   icon: <Icon name="building" size={28} color="white" />,
      isWide: true,
      title: "Property Development and Construction",
      description: "At BO Properties, we offer luxury real estate property investment opportunities tailored for savvy investors looking to secure the future of consistent financial inflow through real estate. We focus on delivering innovative and sustainable housing solutions in prime locations across Lagos.",
    },
    {
      id: 'service2',
      icon: <Image src="/icons/money-change.svg" alt="Money Change" width={28} height={28} />,
    //   icon: <Icon name="money-recive" size={28} color="white" />,
      isWide: false,
      title: "Property Sales and Leasing",
      description: "BO Properties assists clients in selling or leasing properties, offering seamless processes and ensuring the best options are available for tenants and landlords.",
    },
    {
      id: 'service3',
      icon: <Image src="/icons/messages.svg" alt="Messages" width={28} height={28} />,

    //   icon: <Icon name="people" size={28} color="white" />,
      isWide: false,
      title: "Real Estate Consultancy",
      description: "BO Properties offers expert guidance on property investment, strategic buying, and maximizing returns. Let us help you make the best real estate decisions and navigate the real estate market with confidence.",
    },
    {
      id: 'service4',
      icon: <Image src="/icons/buildings.svg" alt="Building" width={28} height={28} />,
    //   icon: <Icon name="building-4" size={28} color="white" />,
      isWide: true,
      title: "Facility Management",
      description: "At BO Properties, our commitment doesn't end after the sale. We remain your trusted partner, providing expert advice and dedicated personnel to manage and enhance your property for long-term value, returns and sustainability.",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-primary-blue-400">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Services
          </h2>
          <p className="text-white/90 text-lg max-w-4xl mx-auto">
            Our real estate business specializes in the buying, selling, renting, leasing and management of land and buildings. We 
            have multiple estates at various stages of development within the Lagos.
          </p>
        </div>
        
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
            />
          </div>
          <div className="col-span-5 md:col-span-2 h-full">
            <ServiceCard 
              icon={services[1].icon}
              title={services[1].title}
              description={services[1].description}
              onConsultClick={handleConsultClick}
              isWide={false}
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
            />
          </div>
          <div className="col-span-5 md:col-span-3 h-full">
            <ServiceCard 
              icon={services[3].icon}
              title={services[3].title}
              description={services[3].description}
              onConsultClick={handleConsultClick}
              isWide={true}
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