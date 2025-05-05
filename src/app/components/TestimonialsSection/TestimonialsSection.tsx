'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Icon from '../Icon';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';

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
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#f7fbff]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          ref={headerRef}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          What they Say about Us
        </motion.h2>
        
        <motion.div 
          className="relative w-full max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main video container with side controls */}
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  {/* Thumbnail with play button overlay */}
                  <div className="absolute inset-0 bg-black">
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Image 
                        src={testimonial.thumbnailUrl} 
                        alt={`${testimonial.name}'s testimonial`}
                        className="w-full h-full object-cover opacity-90"
                        width={1280}
                        height={720}
                      />
                    </motion.div>
                  </div>
                  <motion.button 
                    onClick={toggleVideo}
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label="Play video"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon name="play" size={36} color="#FFFFFF" />
                    </motion.div>
                  </motion.button>
                  
                  {/* Name & title overlay at bottom */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-white/80 text-sm md:text-base">{testimonial.title}</p>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <iframe
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full"
                    src={testimonial.videoUrl}
                    title={`${testimonial.name}'s testimonial`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Side navigation arrows */}
            <motion.button 
              onClick={goToPrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300"
              aria-label="Previous testimonial"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1L1 12L11 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            
            <motion.button 
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-all duration-300"
              aria-label="Next testimonial"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 12L1 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
          
          {/* Bottom indicators */}
          <motion.div 
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full mx-1.5 transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary-blue-300 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 