'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the structure for each slide
interface SlideData {
  id: number;
  backgroundImage: string;
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HeroProps {
  slides: SlideData[];
  autoplaySpeed?: number;
}

const Hero: React.FC<HeroProps> = ({
  slides,
  autoplaySpeed = 7000
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Function to go to next slide with animation
  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, slides.length]);

  // Function to go to previous slide with animation
  const goToPrevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, slides.length]);

  // Function to directly go to a specific slide
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Set up autoplay
  useEffect(() => {
    if (autoplaySpeed <= 0) return;
    
    const interval = setInterval(goToNextSlide, autoplaySpeed);
    
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [autoplaySpeed, goToNextSlide]);

  // Current slide data
  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-black/30 z-0"
        style={{ 
          opacity: isTransitioning ? 0.3 : 1,
          transition: 'opacity 0.5s ease-in-out' 
        }}
      >
        <Image 
          src={slide.backgroundImage}
          alt="Property Background"
          fill 
          className="object-cover"
          priority
          style={{ 
            transition: 'transform 0.5s ease-in-out',
            transform: isTransitioning ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      </div>

      {/* Slider Navigation Arrows */}
      <button 
        onClick={goToPrevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1L1 12L11 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        onClick={goToNextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L11 12L1 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Hero Content - Using a two-column layout for desktop */}
      <div 
        className="flex items-end h-full relative z-10 pb-16 md:pb-24 lg:pb-16"
        style={{ 
          transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(20px)' : 'translateY(0)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left column - Title */}
            <div className="text-white">
              <h3 className="text-base sm:text-lg md:text-xl font-light mb-2 text-[#93B9CE]">
                {slide.subtitle}
              </h3>
              
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                {slide.title1}<br />{slide.title2}
              </h1>
              
              {/* Slider indicator dots */}
              <div className="flex space-x-2 my-4 md:my-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-6 md:w-8 h-1 transition-colors duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-gray-400/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Right column - Description and button */}
            <div className="text-white mt-4 md:mt-0">
              <div className="bg-primary-blue-300/20 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-md">
                <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 font-light leading-relaxed">
                  {slide.description}
                </p>
                
                {slide.buttonText && (
                  <Link href={slide.buttonLink || '#'}>
                    <button className="bg-white hover:bg-gray-100 text-primary-blue-300 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors duration-300 text-sm sm:text-base">
                      {slide.buttonText}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 