'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  title: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, title }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentPage, setCurrentPage] = useState(0);
  
  // Images per page (4 in a grid)
  const imagesPerPage = 4;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  
  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
  
  // Get current images
  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );
  
  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Project Gallery
        </motion.h2>
        
        <div className="grid grid-cols-2 gap-4">
          {currentImages.map((image, index) => (
            <motion.div 
              key={image.id}
              className="relative aspect-square rounded-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Navigation controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={prevPage} 
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              aria-label="Previous page"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={nextPage}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
              aria-label="Next page"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery; 