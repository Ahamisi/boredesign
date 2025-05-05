'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Ifedayo Okungbowa',
    position: 'CEO/Managing Director',
    image: '/team/ifedayo-okungbowa.jpg', // Update with actual image path
  },
  {
    id: 2,
    name: 'Oyindamola Gbadebo',
    position: 'Head of Sales',
    image: '/team/oyindamola-gbadebo.jpg', // Update with actual image path
  },
  {
    id: 3,
    name: 'Oyeniran Oluwafunmilayo',
    position: 'Digital Marketer',
    image: '/team/oyeniran-oluwafunmilayo.jpg', // Update with actual image path
  },
  {
    id: 4,
    name: 'Ewedemi Oluwabusayo',
    position: 'HR Manager',
    image: '/team/ewedemi-oluwabusayo-2.jpg', // Update with actual image path
  },
  {
    id: 5,
    name: 'Asogba Semilore',
    position: 'Social Media Manager',
    image: '/team/semilore-asogba.jpg', // Update with actual image path
  },
  {
    id: 6,
    name: 'Raji Abdullateef',
    position: 'Community Manager',
    image: '/team/raji-abdulateef.jpg', // Update with actual image path
  },
  {
    id: 7,
    name: 'Amos Quartey',
    position: 'Facility Manager',
    image: '/team/amos-quartey.jpg', // Update with actual image path
  },
  {
    id: 8,
    name: 'Victoria Olaoye',
    position: 'Finance Associate',
    image: '/team/victoria-olaoye.jpg', // Update with actual image path
  },
  {
    id: 9,
    name: 'Sheriff Yusuf',
    position: 'Sales Representative',
    image: '/team/sheriff-yusuf.jpg', // Update with actual image path
  },
  {
    id: 10,
    name: 'Idris Maryam',
    position: 'Sales Representative',
    image: '/team/idris-maryam.jpg', // Update with actual image path
  },
  
  
  // Add more team members as needed
];

export default function TeamSection() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4; // Show 4 members on desktop, fewer on mobile
  
  const nextSlide = () => {
    if (startIndex + itemsToShow < teamMembers.length) {
      setStartIndex(startIndex + 1);
    }
  };
  
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  
  // Get visible team members based on current index
  const visibleMembers = teamMembers.slice(startIndex, startIndex + itemsToShow);

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-black">Meet Our Team</h2>
        <p className="mb-12 text-gray-700 max-w-3xl">
          BOProperties board of directors and senior management team offer exceptional expertise in the real estate and construction industries.
        </p>
        
        <div className="relative">
          {/* Team members grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {visibleMembers.map(member => (
              <div key={member.id} className="flex flex-col">
                <div className="rounded-lg overflow-hidden mb-4 aspect-[3/4] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-blue-300">{member.position}</p>
              </div>
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-start space-x-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={startIndex === 0}
              className="w-12 h-12 rounded-full border flex items-center justify-center bg-white shadow hover:bg-gray-100 disabled:opacity-50"
              aria-label="Previous team members"
            >
              <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={startIndex + itemsToShow >= teamMembers.length}
              className="w-12 h-12 rounded-full border flex items-center justify-center bg-white shadow hover:bg-gray-100 disabled:opacity-50"
              aria-label="Next team members"
            >
              <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}