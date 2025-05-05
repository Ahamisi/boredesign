'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ConsultationModal from '@/app/components/ServicesSection/ConsultationModal';

interface ProjectActionsProps {
  projectName: string;
  propertyType?: string;
  brochureUrl?: string;
}

const ProjectActions: React.FC<ProjectActionsProps> = ({ 
  projectName, 
  propertyType = "property",
  brochureUrl
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleConsultClick = () => {
    setIsModalOpen(true);
  };
  
  return (
    <div className="flex flex-col space-y-3">
      <motion.button 
        onClick={handleConsultClick}
        className="px-6 py-3 bg-primary-blue-300 text-white rounded-md hover:bg-primary-blue-400 transition-colors text-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Reach out to a property consultant
      </motion.button>
      
      {brochureUrl && (
        <motion.a 
          href={brochureUrl}
          download
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Download Brochure
        </motion.a>
      )}
      
      {/* Reuse the existing ConsultationModal but prefill it with project info */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedService={`Inquiry about ${projectName}`}
        prefillMessage={`I'm interested in learning more about ${projectName}. Please provide me with more information about this ${propertyType}.`}
      />
    </div>
  );
};

export default ProjectActions; 