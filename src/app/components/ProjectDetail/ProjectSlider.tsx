'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface ImageData {
  src: string;
  alt: string;
  id: string;
}

interface ProjectSliderProps {
  images: ImageData[];
  projectName: string;
  hasThreeSixtyView?: boolean;
  threeSixtyUrl?: string;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ 
  images, 
  projectName,
  hasThreeSixtyView = false,
  threeSixtyUrl = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // Wrap goToNext in useCallback
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, images.length]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, images.length]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swipe left, go to next
      goToNext();
    } else if (diff < -50) {
      // Swipe right, go to prev
      goToPrev();
    }
  };

  // Auto-rotation timer with fixed dependency array
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        goToNext();
      }
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused, goToNext]); // Now goToNext is properly memoized

  return (
    <motion.div 
      className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Breadcrumbs */}
      <div className="absolute top-6 left-6 z-10 flex items-center text-white text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
        <Link href="/projects" className="hover:text-primary-blue-200">Projects</Link>
        <span className="mx-2">/</span>
        <span>{projectName}</span>
      </div>

      {/* 360 View Button */}
      {hasThreeSixtyView && (
        <Link 
          href={threeSixtyUrl}
          className="absolute bottom-6 right-6 z-10 flex items-center text-white text-sm bg-primary-blue-300 px-4 py-2 rounded-full"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          360° View
        </Link>
      )}

      {/* Main Slider */}
      <div 
        className="h-full w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image 
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Controls */}
      <button 
        onClick={goToPrev} 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext} 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectSlider; 