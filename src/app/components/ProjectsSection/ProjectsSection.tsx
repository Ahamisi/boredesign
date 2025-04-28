import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
  status?: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  image, 
  title, 
  location, 
  description, 
  status, 
  slug 
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative rounded-lg overflow-hidden h-64 md:h-72 lg:h-80 mb-4">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center">
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
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-bold text-gray-800 hover:text-primary-blue-200 transition-colors">
            <Link href={`/projects/${slug}`}>
              {title}
            </Link>
          </h3>
          {status && (
            <span className="px-3 py-1 text-xs font-medium text-primary-blue-200 bg-primary-blue-100/10 rounded-full">
              {status}
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  // Project data
  const projects = [
    {
      id: 1,
      image: "/projects/project-primero-bo-properties.jpg",
      title: "Primero, Ilaje Bariga",
      location: "Ilaje, Bariga",
      description: "Featuring highly-rated shortlets, Primero redefines hospitality and rental opportunities.",
      slug: "primero-ilaje-bariga"
    },
    {
      id: 2,
      image: "/projects/queens-court-bo-properties.jpg",
      title: "Queenscourt Hostel, Akoka",
      location: "Akoka",
      description: "Crafted for comfort and class offers students an elevated living experience",
      slug: "queenscourt-hostel-akoka"
    },
    {
      id: 3,
      image: "/projects/estellar-prime-bo-properties.jpg",
      title: "Estellar Prime",
      location: "Abule Ijesha, Yaba",
      description: "Featuring highly-rated shortlets, Primero redefines hospitality and rental opportunities.",
      slug: "estellar-prime"
    },
    {
      id: 4,
      image: "/projects/project-rio-bo-properties.jpg",
      title: "Project Rio",
      location: "Ikeja",
      description: "Crafted for comfort and class offers students an elevated living experience",
      status: "Ongoing",
      slug: "project-rio"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl">
            Each project is carefully designed to meet the unique needs of our clients, from students seeking secure and modern 
            accommodations to investors looking for high-yield assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              image={project.image}
              title={project.title}
              location={project.location}
              description={project.description}
              status={project.status}
              slug={project.slug}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 