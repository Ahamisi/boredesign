import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Rio Lagos - Premium Real Estate Investment Opportunity in Ikeja | BO Properties',
  description: 'Discover Project Rio, a premium real estate investment opportunity in Ikeja, Lagos. Luxury studio, 1-bedroom, and 2-bedroom apartments with full furnishing, smart home technology, and 12 months free management. Located 10 minutes from Murtala Muhammed International Airport.',
  keywords: 'Project Rio Lagos, Ikeja real estate investment, luxury apartments Lagos, commercial property Ikeja, real estate investment Nigeria, premium properties Lagos, BO Properties Project Rio, studio apartments Ikeja, one bedroom apartments Lagos, two bedroom luxury apartments Nigeria, Ikeja airport properties, smart home Lagos',
  openGraph: {
    title: 'Project Rio Lagos - Premium Real Estate Investment Opportunity in Ikeja',
    description: 'Luxury apartments in Ikeja, Lagos. Studio units from ₦70M, 1-bedroom from ₦99M, 2-bedroom from ₦205M. Full furnishing and smart home technology included.',
    url: 'https://bopropertiesng.com/projects/project-rio',
    siteName: 'BO Properties',
    images: [
      {
        url: 'https://bopropertiesng.com/projects/project-rio-bo-properties.jpg',
        width: 1200,
        height: 630,
        alt: 'Project Rio luxury apartments Ikeja Lagos Nigeria real estate investment',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Rio Lagos - Premium Real Estate Investment Ikeja',
    description: 'Luxury apartments in Ikeja, Lagos. Studio units from ₦70M, 1-bedroom from ₦99M, 2-bedroom from ₦205M.',
    images: ['https://bopropertiesng.com/projects/project-rio-bo-properties.jpg'],
  },
  alternates: {
    canonical: 'https://bopropertiesng.com/projects/project-rio',
  },
}

export default function ProjectRioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data for Project Rio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateProject",
            "name": "Project Rio",
            "description": "Premium real estate investment opportunity in Ikeja, Lagos featuring luxury studio, 1-bedroom, and 2-bedroom apartments with full furnishing, smart home technology, and comprehensive management services.",
            "url": "https://bopropertiesng.com/projects/project-rio",
            "image": "https://bopropertiesng.com/projects/project-rio-bo-properties.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ikeja",
              "addressRegion": "Lagos",
              "addressCountry": "Nigeria"
            },
            "developer": {
              "@type": "Organization",
              "name": "BO Properties",
              "url": "https://bopropertiesng.com"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Studio Unit (17SQM)",
                "price": "70000000",
                "priceCurrency": "NGN",
                "description": "17SQM studio apartment with ensuite, full furnishing, smart home technology, and 12 months free management",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer", 
                "name": "One Bedroom (33SQM)",
                "price": "99000000",
                "priceCurrency": "NGN",
                "description": "33SQM one bedroom apartment with ensuite, full furnishing, smart home technology, and 12 months free management",
                "availability": "https://schema.org/InStock"
              },
              {
                "@type": "Offer",
                "name": "Two Bedroom (33SQM)", 
                "price": "205000000",
                "priceCurrency": "NGN",
                "description": "33SQM two bedroom apartment with ensuite, full furnishing, smart home technology, and 12 months free management",
                "availability": "https://schema.org/InStock"
              }
            ],
            "amenityFeature": [
              "Swimming pool",
              "Ground floor parking space",
              "Modern kitchen cabinets", 
              "Smart home technology",
              "Comprehensive property management",
              "Eco-friendly living",
              "Airport proximity (10 minutes)"
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "6.5833",
              "longitude": "3.3333"
            }
          })
        }}
      />
      {children}
    </>
  )
} 