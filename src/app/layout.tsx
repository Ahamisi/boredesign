// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Footer from "./components/Footer/Footer";

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
      path: '../../public/fonts/gilroy/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    // Add more weights/styles as needed
  ],
  variable: '--font-gilroy',
  display: 'swap',
});

export const metadata = {
  title: 'BO Properties - Premier Real Estate Solutions in Nigeria',
  description: 'BO Properties offers premium real estate services including property development, sales, leasing, and management across Nigeria.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body
        className={` ${gilroy.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
