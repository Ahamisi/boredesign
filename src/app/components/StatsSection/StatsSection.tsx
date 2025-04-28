import React from 'react';
import Link from 'next/link';

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-blue-200 mb-2">
        {number}
      </h3>
      <p className="text-gray-700 text-lg">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f7fbff]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
              Bringing you luxury and Comfort
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              BO Properties is a forward-thinking real estate company committed to
              transforming the landscape of property investment and development across
              Nigeria. With a core focus on delivering premium accommodation solutions and
              lucrative investment opportunities, we pride ourselves on crafting spaces that
              seamlessly combine luxury, convenience, and sustainability.
            </p>
            <div>
              <Link 
                href="/about-us"
                className="inline-flex items-center gap-2 bg-primary-blue-200 hover:bg-primary-blue-300 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
              >
                Learn more About Us
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform translate-y-px"
                >
                  <path 
                    d="M4.16669 10H15.8334" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M10 4.16669L15.8333 10L10 15.8334" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <StatItem number="30+" label="Listed Properties" />
            <StatItem number="10+" label="Projects Completed" />
            <StatItem number="10+" label="Facilities being Managed" />
            <StatItem number="25+" label="Properties Sold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 