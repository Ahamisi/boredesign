import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Primero Shortlets Bariga Lagos - Premium Short-term Rental Investment | BO Properties',
  description: 'Experience Primero shortlets in Ilaje, Bariga, Lagos - premium short-term rental apartments redefining hospitality and rental opportunities. Highly-rated accommodation perfect for business travelers, tourists, and Airbnb investment in Lagos, Nigeria.',
  keywords: 'Primero shortlets Lagos, Bariga short-term rentals, Ilaje Bariga accommodation, luxury shortlets Nigeria, Airbnb investment Lagos, business accommodation Lagos, tourist apartments Lagos, BO Properties Primero, shortlet investment Nigeria, Lagos hospitality rentals',
  openGraph: {
    title: 'Primero Shortlets Bariga Lagos - Premium Short-term Rental Investment',
    description: 'Highly-rated shortlets in Ilaje, Bariga, Lagos. Premium accommodation redefining hospitality and rental opportunities for investors and guests.',
    url: 'https://bopropertiesng.com/projects/primero',
    siteName: 'BO Properties',
    images: [
      {
        url: 'https://bopropertiesng.com/projects/project-primero-bo-properties.jpg',
        width: 1200,
        height: 630,
        alt: 'Primero shortlets Bariga Lagos premium short-term rental accommodation',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primero Shortlets Bariga Lagos - Premium Short-term Rentals',
    description: 'Highly-rated shortlets in Ilaje, Bariga, Lagos. Premium hospitality and rental opportunities.',
    images: ['https://bopropertiesng.com/projects/project-primero-bo-properties.jpg'],
  },
  alternates: {
    canonical: 'https://bopropertiesng.com/projects/primero',
  },
}

export default function PrimeroLayout({
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
            "@type": "LodgingBusiness",
            "name": "Primero Shortlets",
            "description": "Premium short-term rental apartments in Ilaje, Bariga, Lagos. Highly-rated shortlets redefining hospitality and rental opportunities for business travelers and tourists.",
            "url": "https://bopropertiesng.com/projects/primero",
            "image": "https://bopropertiesng.com/projects/project-primero-bo-properties.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ilaje",
              "addressLocality": "Bariga",
              "addressRegion": "Lagos",
              "addressCountry": "Nigeria"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "6.5167",
              "longitude": "3.3833"
            },
            "priceRange": "₦₦₦",
            "amenityFeature": [
              "Fully furnished apartments",
              "Modern amenities",
              "24/7 security",
              "High-speed internet",
              "Air conditioning",
              "Kitchen facilities"
            ],
            "starRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "checkinTime": "14:00",
            "checkoutTime": "12:00"
          })
        }}
      />
      {children}
    </>
  )
} 