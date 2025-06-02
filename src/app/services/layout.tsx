import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Services Lagos - Property Development, Investment & Management | BO Properties',
  description: 'Comprehensive real estate services in Lagos, Nigeria. Property development and construction, sales and leasing, real estate consultancy, and facility management. Expert solutions for investors and property owners.',
  keywords: 'real estate services Lagos, property development Nigeria, real estate consultancy Lagos, property management services, facility management Lagos, property sales leasing Nigeria, real estate investment services, property construction Lagos, BO Properties services',
  openGraph: {
    title: 'Real Estate Services Lagos - Property Development, Investment & Management',
    description: 'Comprehensive real estate services including property development, sales, consultancy, and facility management in Lagos, Nigeria.',
    url: 'https://bopropertiesng.com/services',
    siteName: 'BO Properties',
    images: [
      {
        url: 'https://bopropertiesng.com/images/services/services-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'BO Properties real estate services Lagos Nigeria',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Services Lagos - Property Development & Management',
    description: 'Comprehensive real estate services in Lagos, Nigeria. Development, sales, consultancy, and management.',
    images: ['https://bopropertiesng.com/images/services/services-hero.jpg'],
  },
  alternates: {
    canonical: 'https://bopropertiesng.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Service Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "BO Properties Real Estate Services",
            "description": "Comprehensive real estate services in Lagos, Nigeria including property development, sales, consultancy, and facility management.",
            "url": "https://bopropertiesng.com/services",
            "image": "https://bopropertiesng.com/images/services/services-hero.jpg",
            "provider": {
              "@type": "Organization",
              "name": "BO Properties",
              "url": "https://bopropertiesng.com"
            },
            "areaServed": "Lagos, Nigeria",
            "serviceType": "Real Estate Services",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Real Estate Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Property Development and Construction",
                    "description": "Luxury property investment opportunities in prime locations across Lagos with modern architecture and premium amenities.",
                    "serviceType": "Property Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Property Sales and Leasing",
                    "description": "Seamless processes for selling or leasing properties with expert guidance and the best market options for tenants and landlords.",
                    "serviceType": "Property Sales"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Real Estate Consultancy",
                    "description": "Expert guidance on property investments, market analysis, and strategic buying decisions to maximize returns in Lagos real estate market.",
                    "serviceType": "Real Estate Consultancy"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Facility Management",
                    "description": "Comprehensive facility management services to maintain and enhance property value with dedicated personnel and expert advice.",
                    "serviceType": "Facility Management"
                  }
                }
              ]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "19 Funmilayo Onaronke",
              "addressLocality": "Akoka, Yaba",
              "addressRegion": "Lagos",
              "addressCountry": "Nigeria"
            },
            "telephone": "+234-814-732-1515",
            "email": "bopropertiesng@gmail.com"
          })
        }}
      />
      {children}
    </>
  )
} 