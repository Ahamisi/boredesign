'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ConsultationModal from '@/app/components/ServicesSection/ConsultationModal';

interface ProjectActionsProps {
  projectName: string;
  rent?: boolean;
  propertyType?: string;
  brochureUrl?: string;
}

const ProjectActions: React.FC<ProjectActionsProps> = ({
  projectName,
  rent = false,
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
        onClick={() => {
          if (rent) {
            setIsModalOpen(false);
          } else {
            setIsModalOpen(true);
          }
        }}
        className={`px-6 py-3 rounded-md transition-colors text-center ${rent
          ? 'bg-white text-black border border-black hover:bg-gray-100'
          : 'bg-primary-blue-300 hover:bg-primary-blue-400 text-white'
          }`}

        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {rent
          ? 'Rent a space ₦150,000 per month'
          : 'Reach out to a property consultant'}
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