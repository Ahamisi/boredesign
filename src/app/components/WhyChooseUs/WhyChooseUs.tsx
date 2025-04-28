import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#FAFAFA] rounded-lg p-8 shadow-sm">
      <div className="mb-5">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We are dedicated to upholding the highest standards of excellence and integrity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Excellence */}
          <FeatureCard 
            icon={<Image src="/icons/star.svg" alt="Star" width={40} height={40} />}
            title="Excellence"
            description="We don't just aim high, we deliver. From Property development to maintenance, excellence is the standard we never compromise."
          />
          
          {/* Unique Solution */}
          <FeatureCard 
            icon={<Image src="/icons/magicpen.svg" alt="Star" width={40} height={40} />}
            title="Unique Solution"
            description="We offer a smarter, simpler way to invest in real estate and build projects tailored to your goals and lifestyle"
          />
          
          {/* 24/7 */}
          <FeatureCard 
            icon={<Image src="/icons/24-support.svg" alt="247 support" width={40} height={40} />}
            title="24/7"
            description="We're always here. Our dedicated support team is available round the clock to guide you every step of the way."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 