'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import NewsletterSection from '../../components/NewsletterSection';
import { generateMetadata } from './metadata';

// Generate dynamic metadata per blog post


export default function BlogPostPage() {
  // Use client-side params instead
  const params = useParams();
  const slug = params.slug as string;
  
  // For a real app, fetch the specific blog post using the slug
  // This is just sample data
  const post = {
    title: "Why Real Estate Will Lead The Nigerian Economy As The Largest Sector",
    publishedAt: "January 15, 2024",
    readTime: "4 mins read",
    author: {
      name: "Idris Momoh",
      image: "/team/idris-momoh.jpg",
      role: "Real Estate Analyst"
    },
    coverImage: "/blog/real-estate-nigeria-economy.jpg",
    content: [
      {
        type: "heading",
        text: "Introduction:"
      },
      {
        type: "paragraph",
        text: "Real estate has long been regarded as one of the most reliable paths to financial growth. Yet, for many, the process can feel daunting—large capital requirements, complex procedures, and ongoing property management can deter even the most ambitious investors. That's where BO Properties steps in."
      },
      {
        type: "heading",
        text: "Why Real Estate is a Smart Investment?"
      },
      {
        type: "list",
        items: [
          "Stable Returns: Real estate has consistently outperformed many other investment classes over time, offering both steady cash flow and long-term appreciation.",
          "Portfolio Diversification: Investing in property helps balance your financial portfolio by reducing risk and spreading investments across different asset types.",
          "Tangible Assets: Unlike stocks or bonds, real estate provides you with physical assets that have intrinsic value."
        ]
      },
      {
        type: "paragraph",
        text: "The Nigerian real estate sector is poised for unprecedented growth over the next decade. With a growing population, increasing urbanization, and a rising middle class, the demand for quality housing and commercial spaces is soaring."
      },
      {
        type: "heading",
        text: "Key Factors Driving Growth"
      },
      {
        type: "paragraph",
        text: "Several factors are converging to position real estate as the leading sector in Nigeria's economy:"
      },
      {
        type: "list",
        items: [
          "Population Growth: Nigeria's population is expanding rapidly, creating an ever-increasing demand for housing.",
          "Urbanization: Cities like Lagos are experiencing massive population influx, necessitating urban development.",
          "Foreign Investment: International investors are recognizing the potential of Nigerian real estate.",
          "Government Initiatives: Policy reforms are making the sector more accessible and attractive to investors."
        ]
      },
      {
        type: "paragraph",
        text: "As Nigeria continues its economic transformation, real estate stands at the forefront of growth opportunities. Smart investors who position themselves strategically in this market will not only secure their financial future but also contribute to the nation's development."
      }
    ],
    relatedPosts: [
      {
        id: '2',
        slug: 'smart-way-to-build-wealth-real-estate-investment',
        title: 'The Smart Way to Build Wealth: Real Estate Investment Simplified',
        coverImage: '/blog/real-estate-investment-simplified.jpg',
        date: 'December 28, 2023',
      },
      {
        id: '3',
        slug: 'residential-property-trends-in-lagos-2024',
        title: 'Residential Property Trends in Lagos for 2024',
        coverImage: '/blog/lagos-property-trends.jpg',
        date: 'January 5, 2024',
      }
    ]
  };
  
  return (
    <div className="bg-white min-h-screen">
      <Header isLightMode={true} />
      <main className="pt-24 md:pt-28"> {/* Added padding to position content below header */}
        {/* Breadcrumb navigation */}
        <nav className="container mx-auto px-4 md:px-8 py-4">
          <ol className="flex items-center text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-primary-blue-300">Home</Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link href="/blog" className="hover:text-primary-blue-300">Blogs</Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-blue-500 font-medium truncate">{post.title}</li>
          </ol>
        </nav>


        {/* Article header */}
        <div className=' w-full px-4 md:px-8 bg-gray-100'>
        <article className="container mx-auto px-4 md:px-8 pt-10">
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-8">
              {post.author.image && (
                <Image 
                  src={post.author.image} 
                  alt={post.author.name} 
                  width={48} 
                  height={48} 
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <div className="flex items-center">
                  <p className="text-base font-medium text-gray-800">{post.author.name}</p>
                  <span className="mx-2 text-gray-400">•</span>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
                </div>
                <p className="text-sm text-gray-500">{post.publishedAt} • {post.readTime}</p>
              </div>
            </div>
          </header>
          
          {/* Featured image */}
          <div className="relative aspect-[16/9] w-full mb-10">
            <Image 
              src={post.coverImage} 
              alt={post.title} 
              fill 
              className="object-cover rounded-lg"
              priority
            />
          </div>
          
          {/* Article content */}
          <div className="prose prose-lg max-w-none mb-16">
            {post.content.map((block, index) => {
              switch (block.type) {
                case 'heading':
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-800">{block.text}</h2>;
                case 'paragraph':
                  return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{block.text}</p>;
                case 'list':
                  return (
                    <ol key={index} className="list-decimal pl-6 mb-6 space-y-2">
                      {block.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 pl-2">{item}</li>
                      ))}
                    </ol>
                  );
                default:
                  return null;
              }
            })}
          </div>
          
          {/* Social sharing */}
          <div className="flex items-center justify-center space-x-4 mb-16">
            <span className="text-gray-700 font-medium">Share this article:</span>
            <a 
              href={`https://twitter.com/intent/tweet?url=https://boproperties.ng/blog/${slug}&text=${post.title}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1DA1F2] text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.03 10.03 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
              </svg>
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=https://boproperties.ng/blog/${slug}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://boproperties.ng/blog/${slug}&title=${post.title}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2] text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          {/* Related articles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Related Blogs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`}
                  className="flex items-center space-x-4 group"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image 
                      src={relatedPost.coverImage} 
                      alt={relatedPost.title} 
                      fill 
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-primary-blue-300 transition-colors duration-300">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
        </div>
        
        <NewsletterSection />
      </main>
    </div>
  );
} 