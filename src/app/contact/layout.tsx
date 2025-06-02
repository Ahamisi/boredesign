import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact BO Properties - Real Estate Investment Consultancy Lagos Nigeria',
  description: 'Get in touch with BO Properties for real estate investment opportunities, property management services, shortlet rentals, and student accommodation in Lagos, Nigeria. Contact our expert consultants today.',
  keywords: 'contact BO Properties, real estate consultancy Lagos, property investment Nigeria, real estate services Lagos, property management contact, shortlet rental inquiries, student accommodation Lagos, real estate consultant Nigeria, property development contact',
  openGraph: {
    title: 'Contact BO Properties - Real Estate Investment Consultancy Lagos Nigeria',
    description: 'Contact BO Properties for expert real estate investment advice, property management, and premium accommodation services in Lagos, Nigeria.',
    url: 'https://bopropertiesng.com/contact',
    siteName: 'BO Properties',
    images: [
      {
        url: 'https://bopropertiesng.com/logo-bo-properties-color.svg',
        width: 1200,
        height: 630,
        alt: 'Contact BO Properties - Real Estate Investment Lagos Nigeria',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact BO Properties - Real Estate Investment Lagos Nigeria',
    description: 'Get expert real estate investment advice and property management services in Lagos, Nigeria.',
    images: ['https://bopropertiesng.com/logo-bo-properties-color.svg'],
  },
  alternates: {
    canonical: 'https://bopropertiesng.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Local Business Contact Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "RealEstateAgent",
              "name": "BO Properties",
              "url": "https://bopropertiesng.com",
              "logo": "https://bopropertiesng.com/logo-bo-properties-color.svg",
              "description": "Premier real estate investment company in Lagos, Nigeria specializing in property development, shortlets, student hostels, and property management.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "19 Funmilayo Onaronke",
                "addressLocality": "Akoka, Yaba",
                "addressRegion": "Lagos",
                "postalCode": "100001",
                "addressCountry": "Nigeria"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "6.5167",
                "longitude": "3.3833"
              },
              "telephone": "+234-814-732-1515",
              "email": "bopropertiesng@gmail.com",
              "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
              "areaServed": [
                "Lagos, Nigeria",
                "Yaba, Lagos",
                "Akoka, Lagos",
                "Ikeja, Lagos",
                "Bariga, Lagos"
              ],
              "serviceType": [
                "Real Estate Investment Consultancy",
                "Property Development",
                "Shortlet Management",
                "Student Accommodation",
                "Property Management",
                "Facility Management"
              ],
              "priceRange": "₦₦₦",
              "hasMap": "https://maps.google.com/?q=19+Funmilayo+Onaronke,+Akoka,+Yaba,+Lagos,+Nigeria"
            }
          })
        }}
      />
      
      {/* FAQ Schema for common contact questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How can I contact BO Properties for real estate investment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact BO Properties by calling +234-814-732-1515, emailing bopropertiesng@gmail.com, or visiting our office at 19 Funmilayo Onaronke, Akoka, Yaba, Lagos."
                }
              },
              {
                "@type": "Question",
                "name": "What real estate services does BO Properties offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BO Properties offers property development, real estate investment consultancy, shortlet management, student accommodation, property sales and leasing, and facility management services in Lagos, Nigeria."
                }
              },
              {
                "@type": "Question",
                "name": "Where is BO Properties located in Lagos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BO Properties is located at 19 Funmilayo Onaronke, Akoka, Yaba, Lagos, Nigeria. We serve clients across Lagos including Ikeja, Yaba, Akoka, and Bariga areas."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
} 