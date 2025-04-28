import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import LatestNewsSection from "./components/LatestNewsSection";
import NewsletterSection from "./components/NewsletterSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  // Define slide data that exactly matches the images
  const heroSlides = [
    {
      id: 1,
      backgroundImage: "/bo-slider.jpg", // Replace with your actual image
      subtitle: "WELCOME TO BO PROPERTIES",
      title1: "REAL ESTATE",
      title2: "CONSULTANCY",
      description: "BO Properties offers expert guidance on property investment, strategic buying, and maximizing returns. Let us help you make the best real estate decisions and navigate the real estate market with confidence.",
      buttonText: "Schedule a Consultation",
      buttonLink: "/consultation"
    },
    {
      id: 2,
      backgroundImage: "/bo-slider-2.jpg", // Replace with your actual image
      subtitle: "WELCOME TO BO PROPERTIES",
      title1: "PROPERTY DEVELOPMENT",
      title2: "AND CONSTRUCTION",
      description: "We offer luxury real estate property investment opportunities tailored for savvy investors looking to secure the future of consistent financial inflow through real estate.",
      buttonText: "Talk to an Expert",
      buttonLink: "/expert"
    },
    {
      id: 3,
      backgroundImage: "/bo-slider-3.jpg", // Replace with your actual image
      subtitle: "WELCOME TO BO PROPERTIES",
      title1: "PROPERTY MANAGEMENT",
      title2: "SERVICES",
      description: "Our dedicated property management team ensures your properties are well-maintained and occupied with quality tenants, maximizing your return on investment.",
      buttonText: "Our Services",
      buttonLink: "/services"
    },
    {
      id: 4,
      backgroundImage: "/bo-slider-4.jpg", // Replace with your actual image
      subtitle: "WELCOME TO BO PROPERTIES",
      title1: "PROPERTY MANAGEMENT",
      title2: "SERVICES",
      description: "Our dedicated property management team ensures your properties are well-maintained and occupied with quality tenants, maximizing your return on investment.",
      buttonText: "Our Services",
      buttonLink: "/services"
    },
    {
      id: 5,
      backgroundImage: "/bo-slider-5.jpg", // Replace with your actual image
      subtitle: "WELCOME TO BO PROPERTIES",
      title1: "PROPERTY MANAGEMENT",
      title2: "SERVICES",
      description: "Our dedicated property management team ensures your properties are well-maintained and occupied with quality tenants, maximizing your return on investment.",
      buttonText: "Our Services",
      buttonLink: "/services"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero slides={heroSlides} autoplaySpeed={7000} />
      <StatsSection />
      <ProjectsSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <NewsletterSection />
      <LatestNewsSection />


      {/* Additional sections will be added here */}
    </div>
  );
}
