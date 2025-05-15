import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import LatestNewsSection from "./components/LatestNewsSection/LatestNewsSection";
import NewsletterSection from "./components/NewsletterSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default async function Home() {
  // Define slide data that exactly matches the images
  const heroSlides = [
    {
      id: 1,
      backgroundImage: "/bo-slider.jpg", // Replace with your actual image
      subtitle: "WELCOME TO BO PROPERTIES",
      title1: "PROPERTY DEVELOPMENT",
      title2: "AND CONSTRUCTION",
      description: "We offer luxury real estate property investment opportunities tailored for savvy investors looking to secure the future of consistent financial inflow through real estate.",
      buttonText: "Talk to an Expert",
      buttonLink: "/consultation"
    },
    {
      id: 2,
      backgroundImage: "/estellar-finished-1.jpg", // Replace with your actual image
      subtitle: "WELCOME TO BO PROPERTIES",
      title1: "BO SHORTLETS",
      title2: "",
      description: "Experience comfort and convenience with our fully equipped shortlets, perfect for short-term stays, house parties, and more. Strategically located and designed with modern amenities, our shortlets ensure a seamless and luxurious stay.",
      buttonText: "View Shortlets",
      buttonLink: "/expert"
    },
    {
      id: 3,
      backgroundImage: "/bo-slider-3.jpg", // Replace with your actual image
      subtitle: "WELCOME TO BO PROPERTIES",
      title1: "PROPERTY SALES",
      title2: "AND LEASING",
      description: "BO Properties assists clients in selling or leasing properties, offering seamless processes and ensuring the best options are available for tenants and landlords.",
      buttonText: "Our Services",
      buttonLink: "/services"
    },
    {
      id: 4,
      backgroundImage: "/bo-slider-4.jpg", // Replace with your actual image
      subtitle: "WELCOME TO BO PROPERTIES",
      title1: "REAL ESTATE",
      title2: "CONSULTANCY",
      description: "BO Properties offers expert guidance on property investment, strategic buying, and maximizing returns. Let us help you make the best real estate decisions and navigate the real estate market with confidence.",
      buttonText: "Our Services",
      buttonLink: "/services"
    },
    {
      id: 5,
      backgroundImage: "/bo-slider-5.jpg", // Replace with your actual image
      subtitle: "WELCOME TO BO PROPERTIES",
      title1: "FACILITY MANAGEMENT",
      title2: "",
      description: "At BO Properties, our commitment doesn't end after the sale. We remain your trusted partner, providing expert advice and dedicated personnel to manage and enhance your property for long-term value, returns and sustainability.",
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
      {/* <TestimonialsSection /> */}
      <NewsletterSection />
      <LatestNewsSection />


      {/* Additional sections will be added here */}
    </div>
  );
}
