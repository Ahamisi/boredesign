import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About BO Properties - Leading Real Estate Investment Company in Lagos Nigeria',
  description: 'Learn about BO Properties, a forward-thinking real estate company transforming property investment and development across Nigeria. Founded by CEO Ifedayo Okungbowa, we deliver premium accommodation solutions, luxury shortlets, student hostels, and lucrative investment opportunities in Lagos.',
  keywords: 'BO Properties about, real estate company Nigeria, property investment Lagos, CEO Ifedayo Okungbowa, real estate development Nigeria, luxury accommodation Lagos, property management company Nigeria, real estate consultancy Lagos, Nigerian property developers, Lagos real estate investment',
  openGraph: {
    title: 'About BO Properties - Leading Real Estate Investment Company in Lagos Nigeria',
    description: 'Founded by CEO Ifedayo Okungbowa, BO Properties transforms property investment across Nigeria. 4+ projects completed, 7+ properties listed, 50+ facilities managed.',
    url: 'https://bopropertiesng.com/about-us',
    siteName: 'BO Properties',
    images: [
      {
        url: 'https://bopropertiesng.com/who-we-are.jpg',
        width: 1200,
        height: 630,
        alt: 'BO Properties team and company overview - Real Estate Nigeria',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About BO Properties - Real Estate Investment Company Lagos Nigeria',
    description: 'Leading real estate company in Nigeria. 4+ projects completed, 7+ properties listed, 50+ facilities managed.',
    images: ['https://bopropertiesng.com/who-we-are.jpg'],
  },
  alternates: {
    canonical: 'https://bopropertiesng.com/about-us',
  },
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BO Properties",
            "alternateName": "BO Properties Nigeria",
            "url": "https://bopropertiesng.com",
            "logo": "https://bopropertiesng.com/logo-bo-properties-color.svg",
            "description": "Forward-thinking real estate company committed to transforming property investment and development across Nigeria, delivering premium accommodation solutions and lucrative investment opportunities.",
            "founder": {
              "@type": "Person",
              "name": "Ifedayo Okungbowa",
              "jobTitle": "CEO"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "19 Funmilayo Onaronke",
              "addressLocality": "Akoka, Yaba",
              "addressRegion": "Lagos",
              "addressCountry": "Nigeria"
            },
            "telephone": "+234-814-732-1515",
            "email": "bopropertiesng@gmail.com",
            "areaServed": "Nigeria",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "6.5244",
                "longitude": "3.3792"
              },
              "geoRadius": "50000"
            },
            "knowsAbout": [
              "Real Estate Investment",
              "Property Development",
              "Shortlet Management",
              "Student Accommodation",
              "Property Management",
              "Real Estate Consultancy"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Real Estate Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Property Development",
                    "description": "Luxury real estate development projects in Lagos"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Shortlet Rentals",
                    "description": "Premium short-term rental accommodations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Student Hostels",
                    "description": "Modern student accommodation near universities"
                  }
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  )
} 