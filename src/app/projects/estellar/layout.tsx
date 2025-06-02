import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estellar Apartments Akoka Yaba - Exquisite Apartment Building Lagos | BO Properties',
  description: 'Project Estellar is an exquisite apartment building situated in the heart of Akoka, Yaba, Lagos. Premium residential development offering modern living spaces with luxury amenities and strategic location benefits.',
  keywords: 'Estellar apartments Lagos, Akoka Yaba apartments, luxury apartments Yaba, residential development Lagos, premium apartments Akoka, BO Properties Estellar, Yaba real estate, modern apartments Lagos, luxury living Yaba',
  openGraph: {
    title: 'Estellar Apartments Akoka Yaba - Exquisite Apartment Building Lagos',
    description: 'Exquisite apartment building in the heart of Akoka, Yaba, Lagos. Premium residential development with modern amenities and strategic location.',
    url: 'https://bopropertiesng.com/projects/estellar',
    siteName: 'BO Properties',
    images: [
      {
        url: 'https://bopropertiesng.com/projects/estellar-bo-properties.jpg',
        width: 1200,
        height: 630,
        alt: 'Estellar apartments Akoka Yaba Lagos luxury residential development',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estellar Apartments Akoka Yaba - Exquisite Apartment Building',
    description: 'Exquisite apartment building in Akoka, Yaba, Lagos. Premium residential development with modern amenities.',
    images: ['https://bopropertiesng.com/projects/estellar-bo-properties.jpg'],
  },
  alternates: {
    canonical: 'https://bopropertiesng.com/projects/estellar',
  },
}

export default function EstellarLayout({
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
            "@type": "ApartmentComplex",
            "name": "Estellar Apartments",
            "description": "Exquisite apartment building situated in the heart of Akoka, Yaba, Lagos. Premium residential development offering modern living spaces with luxury amenities.",
            "url": "https://bopropertiesng.com/projects/estellar",
            "image": "https://bopropertiesng.com/projects/estellar-bo-properties.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Akoka, Yaba",
              "addressRegion": "Lagos",
              "addressCountry": "Nigeria"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "6.5167",
              "longitude": "3.3833"
            },
            "amenityFeature": [
              "Modern apartment units",
              "Strategic location",
              "Premium finishes",
              "Security systems",
              "Parking facilities",
              "Modern amenities"
            ]
          })
        }}
      />
      {children}
    </>
  )
} 