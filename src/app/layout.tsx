// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import SiteWhatsAppWidget from "./components/SiteWhatsAppWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;

export const metadata = {
  title:
    "BO Properties - Real Estate Investment, Shortlets & Hostels in Lagos",
  description:
    "BO Properties offers premium real estate investment opportunities, luxury shortlets, student hostels, and property development services in Lagos, Nigeria.",
  keywords:
    "real estate investment Lagos, shortlets Nigeria, student hostels Lagos, property development Nigeria, Project Rio Lagos, Estellar Akoka, Primero Bariga, Queens Court hostel, real estate consultancy Nigeria, property management Lagos, luxury apartments Lagos, investment properties Nigeria, Yaba properties, Ikeja real estate, Akoka student accommodation",
  openGraph: {
    title:
      "BO Properties - Premier Real Estate Investment & Shortlets in Lagos Nigeria",
    description:
      "Discover premium real estate investment opportunities, luxury shortlets, and student hostels in Lagos. Featuring Project Rio, Estellar, Primero, and Queens Court properties.",
    url: "https://bopropertiesng.com",
    siteName: "BO Properties",
    images: [
      {
        url: "https://bopropertiesng.com/logo-bo-properties-color.svg",
        width: 1200,
        height: 630,
        alt: "BO Properties - Real Estate Investment Lagos Nigeria",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BO Properties - Real Estate Investment & Shortlets Lagos Nigeria",
    description:
      "Premium real estate investment, luxury shortlets, and student hostels in Lagos, Nigeria.",
    images: ["https://bopropertiesng.com/logo-bo-properties-color.svg"],
  },
  alternates: {
    canonical: "https://bopropertiesng.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gilroy.variable}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="author" content="BO Properties Nigeria" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "BO Properties",
              url: "https://bopropertiesng.com",
              logo: "https://bopropertiesng.com/logo-bo-properties-color.svg",
              description:
                "Premier real estate investment company specializing in shortlets, student hostels, and property development in Lagos, Nigeria.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "19 Funmilayo Onaronke",
                addressLocality: "Akoka, Yaba",
                addressRegion: "Lagos",
                addressCountry: "Nigeria",
              },
              telephone: "+234-814-732-1515",
              email: "bopropertiesng@gmail.com",
              areaServed: [
                "Lagos, Nigeria",
                "Yaba, Lagos",
                "Akoka, Lagos",
                "Ikeja, Lagos",
                "Bariga, Lagos",
              ],
              serviceType: [
                "Real Estate Investment",
                "Shortlet Rentals",
                "Student Hostels",
                "Property Development",
                "Property Management",
                "Real Estate Consultancy",
              ],
              priceRange: "₦₦₦",
              sameAs: ["https://bopropertiesng.com"],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BO Properties Nigeria",
              alternateName: "BO Properties",
              url: "https://bopropertiesng.com",
              logo: "https://bopropertiesng.com/logo-bo-properties-color.svg",
              description:
                "Leading real estate investment company in Lagos, Nigeria, specializing in luxury shortlets, student hostels, and premium property development projects including Project Rio, Estellar, and Primero.",
              foundingLocation: "Lagos, Nigeria",
              areaServed: "Nigeria",
              knowsAbout: [
                "Real Estate Investment",
                "Property Development Lagos",
                "Shortlet Rentals Nigeria",
                "Student Accommodation Lagos",
                "Property Management",
                "Real Estate Consultancy",
              ],
            }),
          }}
        />

        {/* Mailchimp Popup Script */}
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/924a1b62e8520d0fa960cca10/59e17c3700b4abb7d680ae6d3.js");`,
          }}
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>

      <body className={`${gilroy.variable} antialiased`}>
        {children}
        <Footer />
        <SiteWhatsAppWidget />
      </body>
    </html>
  );
}