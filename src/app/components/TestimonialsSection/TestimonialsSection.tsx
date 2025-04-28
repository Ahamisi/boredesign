'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Icon from '../Icon';
import Image from 'next/image';

interface TestimonialData {
  id: number;
  videoUrl: string;
  thumbnailUrl: string;
  name: string;
  title: string;
  company?: string;
}

interface TestimonialsSectionProps {
  autoplaySpeed?: number;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  autoplaySpeed = 0 // 0 means no autoplay by default
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  
  // Sample testimonial data
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
      thumbnailUrl: "/testimonials/testimonial1.jpg",
      name: "John Smith",
      title: "CEO, Smith Investments",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
      thumbnailUrl: "/testimonials/testimonial2.jpg",
      name: "Sarah Johnson",
      title: "Property Investor",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
      thumbnailUrl: "/testimonials/testimonial3.jpg",
      name: "Michael Adebayo",
      title: "Director, Adebayo Holdings",
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
      thumbnailUrl: "/testimonials/testimonial4.jpg",
      name: "Amina Ibrahim",
      title: "Real Estate Developer",
    },
    {
      id: 5,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
      thumbnailUrl: "/testimonials/testimonial5.jpg",
      name: "David Okafor",
      title: "Property Owner",
    }
  ];

  // Function to go to next slide with animation
  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, testimonials.length]);

  // Function to go to previous slide with animation
  const goToPrevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, testimonials.length]);

  // Function to directly go to a specific slide
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    setIsPlaying(false);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Toggle video play state
  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
    
    // Control video playback using iframe API
    if (videoRef.current) {
      const iframe = videoRef.current;
      const url = testimonials[currentSlide].videoUrl;
      
      if (!isPlaying) {
        // Add autoplay parameter to play the video
        iframe.src = `${url}?autoplay=1`;
      } else {
        // Remove autoplay parameter to pause the video
        iframe.src = url;
      }
    }
  };

  // Set up autoplay if needed
  useEffect(() => {
    if (autoplaySpeed <= 0 || isPlaying) return;
    
    const interval = setInterval(goToNextSlide, autoplaySpeed);
    
    // Clear interval on component unmount or when video is playing
    return () => clearInterval(interval);
  }, [autoplaySpeed, goToNextSlide, isPlaying]);

  // Current testimonial
  const testimonial = testimonials[currentSlide];

  return (
    <section className="py-16 md:py-24 bg-[#f7fbff]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">
          What they Say about Us
        </h2>
        
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Main video container with side controls */}
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            {!isPlaying ? (
              <>
                {/* Thumbnail with play button overlay */}
                <div className="absolute inset-0 bg-black">
                  <Image 
                    src={testimonial.thumbnailUrl} 
                    alt={`${testimonial.name}'s testimonial`}
                    className="w-full h-full object-cover opacity-90"
                    width={1280}
                    height={720}
                  />
                </div>
                <button 
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon name="play" size={36} color="#FFFFFF" />
                  </div>
                </button>
                
                {/* Name & title overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-lg md:text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-white/80 text-sm md:text-base">{testimonial.title}</p>
                </div>
              </>
            ) : (
              <iframe
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full"
                src={testimonial.videoUrl}
                title={`${testimonial.name}'s testimonial`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}

            {/* Side navigation arrows */}
            <button 
              onClick={goToPrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1L1 12L11 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 12L1 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Bottom indicators */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full mx-1.5 transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary-blue-300 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 