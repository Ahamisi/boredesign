'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define dropdown menu items
interface MenuItem {
  title: string;
  href: string;
}

interface DropdownProps {
  title: string;
  items: MenuItem[];
  href: string;
  isLightMode?: boolean;
}

interface HeaderProps {
  isLightMode?: boolean;
}

const DropdownMenu: React.FC<DropdownProps> = ({ title, items, href, isLightMode = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Add a delay before closing to give user time to move to the dropdown
  const handleMouseLeave = () => {
    // Add a small delay before closing the dropdown
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms delay
    
    // Store the timeout ID in a ref so we can clear it if needed
    dropdownRef.current?.setAttribute('data-timeout', timeout.toString());
  };
  
  // Cancel the closing timeout if user moves back into the dropdown area
  const handleMouseEnter = () => {
    const timeoutId = dropdownRef.current?.getAttribute('data-timeout');
    if (timeoutId) {
      clearTimeout(parseInt(timeoutId, 10));
      dropdownRef.current?.removeAttribute('data-timeout');
    }
    setIsOpen(true);
  };
  
  return (
    <div 
      className="relative group" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link 
        href={href} 
        className={`flex items-center hover:opacity-80 font-medium py-2 ${isLightMode ? 'text-gray-800' : 'text-white'}`}
      >
        {title} 
        <span className="ml-1 inline-block">
          <svg 
            width="12" 
            height="6" 
            viewBox="0 0 12 6" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 1L6 5L11 1" 
              stroke={isLightMode ? "#333333" : "white"} 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
      
      {/* Use opacity and pointer-events for smooth transition */}
      <div 
        className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-1 pointer-events-none'
        }`}
        style={{ minWidth: '220px' }}
      >
        {items.map((item, index) => (
          <Link 
            key={index} 
            href={item.href} 
            className="block px-4 py-2 text-sm text-primary-blue-300 hover:bg-gray-100"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ isLightMode = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Determine if we should use light mode based on the current path or prop
  const shouldUseLightMode = isLightMode || pathname.startsWith('/blog/');
  
  // Track scrolling to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const servicesItems = [
    { title: 'Real Estate Consultancy', href: '/services/consultancy' },
    { title: 'Property Development', href: '/services/development' },
    { title: 'Property Management', href: '/services/management' },
    { title: 'Property Sales and Leasing', href: '/services/sales' }
  ];
  
  const projectsItems = [
    { title: 'Project Rio', href: '/projects/project-rio' },
    { title: 'Primero', href: '/projects/primero' },
    { title: 'Estellar', href: '/projects/estellar' },
    { title: 'Estellar Prime', href: '/projects/estellar-prime' },
    { title: 'Queens Court', href: '/projects/queens-court' }
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 flex items-center justify-between px-8 lg:px-24 py-4 z-50 transition-all duration-300 ${
      shouldUseLightMode 
        ? scrolled ? 'bg-white shadow-lg' : 'bg-white' 
        : scrolled ? 'bg-primary-blue-400 shadow-lg' : 'bg-primary-blue-400/90'
    }`}>
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image 
              src={shouldUseLightMode ? "/logo-bo-properties-color.svg" : "/logo-bo-properties.svg"}
              alt="BO PROPERTIES"
              width={80}
              height={30}
              priority
            />
          </div>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-12">
        <Link 
          href="/about-us" 
          className={`hover:opacity-80 font-medium py-2 ${shouldUseLightMode ? 'text-gray-800' : 'text-white'}`}
        >
          About Us
        </Link>
        <DropdownMenu 
          title="Services" 
          items={servicesItems} 
          href="/services" 
          isLightMode={shouldUseLightMode}
        />
        <DropdownMenu 
          title="Projects" 
          items={projectsItems} 
          href="/projects" 
          isLightMode={shouldUseLightMode}
        />
        <Link 
          href="/blog" 
          className={`hover:opacity-80 font-medium py-2 ${shouldUseLightMode ? 'text-gray-800' : 'text-white'}`}
        >
          Blogs
        </Link>
      </nav>
      
      {/* CTA Button */}
      <div className="hidden md:block">
        <Link href="/contact">
          <button className={`rounded-full px-6 py-2 transition-all duration-300 font-medium ${
            shouldUseLightMode 
              ? 'bg-primary-blue-400 text-white hover:bg-primary-blue-400' 
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
          }`}>
            Send Us a Message
          </button>
        </Link>
      </div>
      
      {/* Mobile menu button - completely isolated */}
      <div className="md:hidden z-50 relative">
        <button 
          type="button"
          className={`p-2 relative z-50 ${shouldUseLightMode ? 'text-gray-800' : 'text-white'}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown - with fixed z-index and pointer-events control */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          shouldUseLightMode
            ? 'bg-white text-gray-800'
            : 'bg-primary-blue-400 text-white'
        } ${
          mobileMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-4">
          <Link 
            href="/about-us" 
            className={`py-3 hover:opacity-80 border-b ${shouldUseLightMode ? 'border-gray-200' : 'border-white/10'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          
          {/* Mobile Services Dropdown */}
          <div className={`py-3 border-b ${shouldUseLightMode ? 'border-gray-200' : 'border-white/10'}`}>
            <Link href="/services" className="font-medium block mb-2">Services</Link>
            <div className="pl-4 flex flex-col gap-2">
              {servicesItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  className="py-1 hover:opacity-80 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Projects Dropdown */}
          <div className={`py-3 border-b ${shouldUseLightMode ? 'border-gray-200' : 'border-white/10'}`}>
            <Link href="/projects" className="font-medium block mb-2">Projects</Link>
            <div className="pl-4 flex flex-col gap-2">
              {projectsItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  className="py-1 hover:opacity-80 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            href="/blog" 
            className={`py-3 hover:opacity-80 border-b ${shouldUseLightMode ? 'border-gray-200' : 'border-white/10'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
          </Link>
          
          <Link 
            href="/contact" 
            className="mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <button className={`w-full rounded-full px-6 py-2 transition-all duration-300 font-medium ${
              shouldUseLightMode 
                ? 'bg-primary-blue-300 text-white hover:bg-primary-blue-400' 
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
            }`}>
              Send Us a Message
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 