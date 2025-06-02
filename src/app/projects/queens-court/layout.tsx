import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Queens Court Student Hostel Akoka - Premium Student Accommodation Lagos | BO Properties',
  description: 'Queens Court offers premium student accommodation in Akoka, Lagos. Modern hostel facilities near University of Lagos (UNILAG) with security, comfort, and convenience. Crafted for comfort and class, offering students an elevated living experience.',
  keywords: 'Queens Court hostel Lagos, student accommodation Akoka, University of Lagos hostel, UNILAG student housing, student housing Lagos, premium student hostel Nigeria, Akoka student accommodation, university hostel Lagos, student residence Lagos, BO Properties Queens Court',
  openGraph: {
    title: 'Queens Court Student Hostel Akoka - Premium Student Accommodation Lagos',
    description: 'Premium student accommodation in Akoka, Lagos near University of Lagos. Modern facilities crafted for comfort and class, offering students an elevated living experience.',
    url: 'https://bopropertiesng.com/projects/queens-court',
    siteName: 'BO Properties',
    images: [
      {
        url: 'https://bopropertiesng.com/projects/queens-court-bo-properties.jpg',
        width: 1200,
        height: 630,
        alt: 'Queens Court student hostel Akoka Lagos University accommodation',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Queens Court Student Hostel Akoka - Premium Student Accommodation',
    description: 'Premium student accommodation in Akoka, Lagos near University of Lagos. Modern facilities for elevated student living.',
    images: ['https://bopropertiesng.com/projects/queens-court-bo-properties.jpg'],
  },
  alternates: {
    canonical: 'https://bopropertiesng.com/projects/queens-court',
  },
}

export default function QueensCourtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "StudentAccommodation",
            "name": "Queens Court Student Hostel",
            "description": "Premium student accommodation in Akoka, Lagos. Modern hostel facilities crafted for comfort and class, offering students an elevated living experience near University of Lagos.",
            "url": "https://bopropertiesng.com/projects/queens-court",
            "image": "https://bopropertiesng.com/projects/queens-court-bo-properties.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Akoka",
              "addressRegion": "Lagos",
              "addressCountry": "Nigeria"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "6.5167",
              "longitude": "3.3833"
            },
            "amenityFeature": [
              "Modern student rooms",
              "24/7 security",
              "Study areas",
              "Common rooms",
              "High-speed internet",
              "Laundry facilities",
              "Proximity to University of Lagos"
            ],
            "audience": {
              "@type": "EducationalAudience",
              "educationalRole": "student"
            },
            "nearbyAttraction": {
              "@type": "EducationalOrganization",
              "name": "University of Lagos",
              "sameAs": "https://www.unilag.edu.ng"
            }
          })
        }}
      />
      {children}
    </>
  )
} 