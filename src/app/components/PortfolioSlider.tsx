'use client';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    image: '/projects/project-primero-bo-properties.jpg', // Replace with your actual image path
    location: 'Ilaje, Bariga',
    title: 'Primero, Ilaje Bariga',
    description: 'Featuring highly-rated shortlets, Primero redefines hospitality and rental opportunities.',
  },
  {
    image: '/projects/queens-court-bo-properties.jpg', // Replace with your actual image path
    location: 'Akoka',
    title: 'Queenscourt Hostel, Akoka',
    description: 'Crafted for comfort and class; offers students an elevated living experience.',
  },
  {
    image: '/projects/estellar-prime/estellar-prime.jpg', // Replace with your actual image path
    location: 'Abule Ijesha, Yaba',
    title: 'Estellar Prime',
    description: 'Estellar Prime is a stunning masterpiece of modern architecture, crafted to...',
  },
  {
    image: '/projects/project-rio-bo-properties.jpg', // Replace with your actual image path
    location: 'Ikeja',
    title: 'Project Rio',
    description: 'Crafted for comfort and class; offers students an elevated living experience',
  },
  // Add more projects as needed
];

export default function PortfolioSlider() {
  const [index, setIndex] = useState(0);

  // Always show two cards at a time
  const visibleProjects = projects.slice(index, index + 2);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(projects.length - 2, i + 1));

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 mt-24">
      <h2 className="text-4xl font-bold mb-2 text-black text-center md:text-left">Our Portfolio</h2>
      <p className="mb-10 text-gray-600 text-lg text-center md:text-left">
        Each project is carefully designed to meet the unique needs of our clients, from students seeking secure and modern accommodations to investors looking for high-yield assets.
      </p>
      <div className="flex flex-col items-left">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
          {visibleProjects.map((project, i) => (
            <div key={i}>
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1 min-w-[320px] max-w-xl"
            >
              <div className="relative w-full h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
                <span className="absolute top-4 left-4 bg-white/90 text-gray-800 text-sm px-4 py-1 rounded-full font-semibold shadow">
                  <svg className="inline-block mr-1" width="10" height="10" fill="currentColor" viewBox="0 0 20 20"><circle cx="5" cy="5" r="5"/></svg>
                  {project.location}
                </span>
              </div>
            </div>
            <div className="p-6 pl-0">
                <h3 className="text-xl font-bold text-primary-blue-300 mb-1">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
            </div>
            </div>
          ))}
        </div>
        {/* Controls */}
        <div className="flex justify-left gap-4 mt-8">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-12 h-12 rounded-full border flex items-center justify-center bg-white shadow hover:bg-gray-100 disabled:opacity-50"
            aria-label="Previous"
          >
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            onClick={next}
            disabled={index >= projects.length - 2}
            className="w-12 h-12 rounded-full border flex items-center justify-center bg-white shadow hover:bg-gray-100 disabled:opacity-50"
            aria-label="Next"
          >
            <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}