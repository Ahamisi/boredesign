
import React from 'react';
import { useParams } from 'next/navigation';
import ProjectSlider from '@/app/components/ProjectDetail/ProjectSlider';
import ProjectFeatures from '@/app/components/ProjectDetail/ProjectFeatures';
import PricingPlans from '@/app/components/ProjectDetail/PricingPlans';
import Header from '@/app/components/Header';

// This would come from your CMS or data source in a real app
const projectsData = {
  'project-rio': {
    name: 'Project Rio',
    location: 'Ikeja',
    status: 'Ongoing',
    shortDescription: 'Located just 10 minutes from the international airport, Rio promises a premium living and investment experience in the heart of Ikeja.',
    description: 'Project Rio, at the heart of Ikeja, is a masterpiece of modern architecture designed to elevate the living experience. Thoughtfully crafted to suit diverse lifestyles, this exceptional property combines style, functionality, and innovation, making it the ideal choice for contemporary living.',
    images: [
      { src: '/projects/project-rio-bo-properties.jpg', alt: 'Project Rio Exterior', id: 'img1' },
      { src: '/projects/rio-living-room.jpg', alt: 'Rio Living Room', id: 'img2' },
      { src: '/projects/rio-bedroom.jpg', alt: 'Rio Bedroom', id: 'img3' },
    ],
    hasThreeSixtyView: true,
    threeSixtyUrl: '/projects/project-rio/360',
    amenities: [
      { icon: '/icons/parking.svg', title: 'Whole ground floor parking space' },
      { icon: '/icons/pool.svg', title: 'Swimming pool' },
      { icon: '/icons/spa.svg', title: 'Relaxation Area' },
      { icon: '/icons/kitchen.svg', title: 'Modern kitchen cabinets' },
      { icon: '/icons/smart-home.svg', title: 'Smart home technology' },
      { icon: '/icons/eco.svg', title: 'Eco friendly living' },
    ],
    plans: [
      {
        id: 'studio',
        icon: '/icons/house-key.svg',
        type: 'Studio Unit (17SQM)',
        size: '17sqm',
        price: '₦70,000,000',
        initialDeposit: '₦20,000,000',
        paymentDuration: '15months',
        features: ['Open plan layout', 'Fitted kitchen', 'Modern bathroom']
      },
      {
        id: 'one-bed',
        icon: '/icons/house-key.svg',
        type: 'One bedroom (33SQM)',
        size: '33 sqm',
        price: '₦99,000,000',
        initialDeposit: '₦30,000,000',
        paymentDuration: '15months',
        features: ['Spacious bedroom', 'Fitted kitchen', 'Modern bathroom', 'Living area']
      },
      {
        id: 'two-bed',
        icon: '/icons/house-key.svg',
        type: 'Two bedroom (33SQM)',
        size: '33 sqm',
        price: '₦205,000,000',
        initialDeposit: '₦50,000,000',
        paymentDuration: '15months',
        features: ['2 bedrooms', 'Fitted kitchen', 'Modern bathroom', 'Living & dining area']
      }
    ]
  },
  // Add more projects here
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const projectSlug = Array.isArray(slug) ? slug[0] : slug;
  
  // Get project data based on slug
  const project = projectsData[projectSlug as keyof typeof projectsData];
  
  // If project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header isLightMode={true} />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Header isLightMode={true} />
      
      <main>
        {/* Project Slider */}
        <ProjectSlider 
          images={project.images} 
          projectName={project.name}
          hasThreeSixtyView={project.hasThreeSixtyView}
          threeSixtyUrl={project.threeSixtyUrl}
        />
        
        {/* Project Features */}
        <ProjectFeatures 
          title={project.name}
          description={project.description}
          location={project.location}
          status={project.status}
          shortDescription={project.shortDescription}
          amenities={project.amenities}
        />
        
        {/* Pricing Plans */}
        <PricingPlans plans={project.plans} />
        
        {/* More components can be added here: Gallery, Related Projects, etc. */}
      </main>
    </div>
  );
} 