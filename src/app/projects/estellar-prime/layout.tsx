import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estellar Prime Abule Ijesha Yaba - Ongoing Premium Development Lagos | BO Properties',
  description: 'Estellar Prime in Abule Ijesha, Yaba, Lagos is an ongoing premium residential development. Featuring highly-rated shortlets and luxury accommodations, redefining hospitality and rental opportunities in Yaba.',
  keywords: 'Estellar Prime Lagos, Abule Ijesha Yaba development, ongoing projects Lagos, premium development Yaba, luxury shortlets Yaba, residential development Lagos, BO Properties Estellar Prime, Yaba real estate investment, modern apartments Yaba',
  openGraph: {
    title: 'Estellar Prime Abule Ijesha Yaba - Ongoing Premium Development Lagos',
    description: 'Ongoing premium development in Abule Ijesha, Yaba. Featuring luxury shortlets and accommodations, redefining hospitality and rental opportunities.',
    url: 'https://bopropertiesng.com/projects/estellar-prime',
    siteName: 'BO Properties',
    images: [
      {
        url: 'https://bopropertiesng.com/projects/estellar-prime/estellar-prime.jpg',
        width: 1200,
        height: 630,
        alt: 'Estellar Prime Abule Ijesha Yaba ongoing premium development Lagos',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estellar Prime Yaba - Ongoing Premium Development Lagos',
    description: 'Ongoing premium development in Abule Ijesha, Yaba. Luxury shortlets and modern accommodations.',
    images: ['https://bopropertiesng.com/projects/estellar-prime/estellar-prime.jpg'],
  },
  alternates: {
    canonical: 'https://bopropertiesng.com/projects/estellar-prime',
  },
}

export default function EstellarPrimeLayout({
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
            "@type": "RealEstateProject",
            "name": "Estellar Prime",
            "description": "Ongoing premium residential development in Abule Ijesha, Yaba, Lagos. Featuring luxury shortlets and accommodations, redefining hospitality and rental opportunities.",
            "url": "https://bopropertiesng.com/projects/estellar-prime",
            "image": "https://bopropertiesng.com/projects/estellar-prime/estellar-prime.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Abule Ijesha",
              "addressLocality": "Yaba",
              "addressRegion": "Lagos",
              "addressCountry": "Nigeria"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "6.5167",
              "longitude": "3.3833"
            },
            "developer": {
              "@type": "Organization",
              "name": "BO Properties",
              "url": "https://bopropertiesng.com"
            },
            "status": "Under Construction",
            "amenityFeature": [
              "Luxury shortlet accommodations",
              "Modern amenities",
              "Strategic Yaba location",
              "Premium finishes",
              "Investment opportunities"
            ]
          })
        }}
      />
      {children}
    </>
  )
} 