'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
  status?: string;
  slug: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  image, 
  title, 
  location, 
  description, 
  status, 
  slug,
  index
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <motion.div 
      ref={ref}
      className="flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.2 + (index * 0.1),
        ease: "easeOut" 
      }}
    >
      <div className="relative rounded-lg overflow-hidden h-64 md:h-72 lg:h-80 mb-4">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={`object-cover transition-transform duration-700 ${isInView ? 'scale-100' : 'scale-110'}`}
        />
        <motion.div 
          className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
        >
          <svg 
            className="h-4 w-4 mr-1 text-primary-blue-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
          <span className="text-sm font-medium text-gray-800">{location}</span>
        </motion.div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-bold text-gray-800 hover:text-primary-blue-200 transition-colors">
            <Link href={`/projects/${slug}`}>
              {title}
            </Link>
          </h3>
          {status && (
            <motion.span 
              className="px-3 py-1 text-xs font-medium text-primary-blue-200 bg-primary-blue-100/10 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
            >
              {status}
            </motion.span>
          )}
        </div>
        <motion.p 
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const isButtonInView = useInView(buttonRef, { once: true });
  
  // Project data
  const projects = [
    {
      id: 1,
      image: "/projects/project-primero-bo-properties.jpg",
      title: "Primero, Ilaje Bariga",
      location: "Ilaje, Bariga",
      description: "Featuring highly-rated shortlets, Primero redefines hospitality and rental opportunities.",
      slug: "primero"
    },
    {
      id: 2,
      image: "/projects/queens-court-bo-properties.jpg",
      title: "Queenscourt Hostel, Akoka",
      location: "Akoka",
      description: "Crafted for comfort and class; offers students an elevated living experience",
      slug: "queens-court"
    },
    {
      id: 3,
      image: "/projects/estellar/estellar-finished-1.jpg",
      title: "Estellar",
      location: "Akoka, Yaba",
      description: "Project ESTELLAR is an exquisite apartment building situated in the heart of Akoka.",
      slug: "estellar"
    },
    {
      id: 4,
      image: "/projects/estellar-prime/estellar-prime.jpg",
      title: "Estellar Prime",
      location: "Abule Ijesha, Yaba",
      description: "Featuring highly-rated shortlets, Primero redefines hospitality and rental opportunities.",
      slug: "estellar-prime",
      status: "Ongoing"
    },
    {
      id: 5,
      image: "/projects/project-rio-bo-properties.jpg",
      title: "Project Rio",
      location: "Ikeja",
      description: "Rio promises a premium living and investment experience in the heart of Ikeja.",
      status: "Ongoing",
      slug: "project-rio"
    },
    
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          ref={headerRef}
          className="mb-12"
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
            Our Projects
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-4xl"
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Each project is carefully designed to meet the unique needs of our clients, from students seeking secure and modern 
            accommodations to investors looking for high-yield assets.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              image={project.image}
              title={project.title}
              location={project.location}
              description={project.description}
              status={project.status}
              slug={project.slug}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          ref={buttonRef}
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-primary-blue-200 hover:text-primary-blue-300 font-semibold transition-colors"
          >
            View All Projects
            <svg 
              className="w-5 h-5"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 