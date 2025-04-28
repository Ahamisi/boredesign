import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import NewsletterSection from '../components/NewsletterSection';

// SEO metadata for the blog listing page
export const metadata = {
  title: 'Latest Real Estate News & Insights | BO Properties',
  description: 'Stay informed with the latest real estate news, market trends, and investment strategies. Expert insights from BO Properties to help you make better property decisions.',
  keywords: 'real estate news, property investment, Nigerian real estate, Lagos property market, real estate blog',
  openGraph: {
    title: 'Latest Real Estate News & Insights | BO Properties',
    description: 'Stay informed with the latest real estate news, market trends, and investment strategies from BO Properties.',
    url: 'https://boproperties.ng/blog',
    siteName: 'BO Properties',
    images: [
      {
        url: 'https://boproperties.ng/og/blog-cover.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    image?: string;
  };
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      slug: 'why-real-estate-will-lead-the-nigerian-economy',
      title: 'Why Real Estate Will Lead The Nigerian Economy As The Largest Sector',
      excerpt: 'An analysis of how the real estate sector is positioned to become the largest contributor to Nigeria\'s GDP in the coming years.',
      coverImage: '/blog/real-estate-nigeria-economy.jpg',
      date: 'January 15, 2024',
      readTime: '4 mins read',
      category: 'Market Analysis',
      author: {
        name: 'Idris Momoh',
        image: '/team/idris-momoh.jpg'
      }
    },
    {
      id: '2',
      slug: 'smart-way-to-build-wealth-real-estate-investment',
      title: 'The Smart Way to Build Wealth: Real Estate Investment Simplified',
      excerpt: 'Discover how strategic real estate investments can build sustainable wealth with less risk than traditional investment vehicles.',
      coverImage: '/blog/real-estate-investment-simplified.jpg',
      date: 'December 28, 2023',
      readTime: '5 mins read',
      category: 'Investment Guides',
      author: {
        name: 'Aisha Bello',
        image: '/team/aisha-bello.jpg'
      }
    },
    {
      id: '3',
      slug: 'residential-property-trends-in-lagos-2024',
      title: 'Residential Property Trends in Lagos for 2024',
      excerpt: 'A comprehensive look at the evolving residential property landscape in Lagos and what investors should watch for.',
      coverImage: '/blog/lagos-property-trends.jpg',
      date: 'January 5, 2024',
      readTime: '6 mins read',
      category: 'Market Trends',
      author: {
        name: 'Daniel Okonkwo',
        image: '/team/daniel-okonkwo.jpg'
      }
    },
    {
      id: '4',
      slug: 'financing-options-for-property-development',
      title: 'Financing Options for Property Development in Nigeria',
      excerpt: 'Exploring the various financing methods available for property developers in  Nigeria\'s growing real estate market.',
      coverImage: '/blog/financing-property-development.jpg',
      date: 'January 10, 2024',
      readTime: '7 mins read',
      category: 'Property Development',
      author: {
        name: 'Oluwaseun Adeyemi',
        image: '/team/oluwaseun-adeyemi.jpg'
      }
    },
    {
      id: '5',
      slug: 'tax-implications-for-real-estate-investors',
      title: 'Tax Implications for Real Estate Investors in Nigeria',
      excerpt: 'A detailed guide to understanding the tax considerations for property investments in  Nigeria\'s complex tax environment.',
      coverImage: '/blog/tax-implications.jpg',
      date: 'December 12, 2023',
      readTime: '8 mins read',
      category: 'Investment Guides',
      author: {
        name: 'Chioma Nwosu',
        image: '/team/chioma-nwosu.jpg'
      }
    },
    {
      id: '6',
      slug: 'sustainable-building-practices',
      title: 'Sustainable Building Practices for Modern Nigerian Properties',
      excerpt: 'How eco-friendly construction methods are transforming  Nigeria\'s real estate sector for a greener future.',
      coverImage: '/blog/sustainable-building.jpg',
      date: 'December 5, 2023',
      readTime: '6 mins read',
      category: 'Property Development',
      author: {
        name: 'Idris Momoh',
        image: '/team/idris-momoh.jpg'
      }
    }
  ];

  const categories = ['All', 'Market Analysis', 'Investment Guides', 'Market Trends', 'Property Development', 'Real Estate Tips'];

  return (
    <div className="bg-white min-h-screen">
      <Header isLightMode={true} />
      <main className="pt-24 md:pt-28"> {/* Added padding to position content below header */}
        {/* Hero section */}
        <section className="py-16 md:py-20 bg-[#f7fbff]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Real Estate Insights & News
              </h1>
              <p className="text-xl text-gray-600">
                Expert analysis, market trends, and investment strategies to guide your real estate decisions
              </p>
            </div>
          </div>
        </section>

        {/* Category filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
                    category === 'All' 
                      ? 'bg-primary-blue-300 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog posts grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="flex flex-col h-full">
                  <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-4">
                    <Image 
                      src={post.coverImage} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-primary-blue-300 text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </Link>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center space-x-4 mb-4">
                      {post.author.image && (
                        <Image 
                          src={post.author.image} 
                          alt={post.author.name} 
                          width={40} 
                          height={40} 
                          className="rounded-full object-cover"
                        />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-800">{post.author.name}</p>
                        <p className="text-xs text-gray-500">{post.date} • {post.readTime}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-blue-300 transition-colors duration-300">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-auto">
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="inline-flex items-center text-primary-blue-300 hover:text-primary-blue-400 transition-colors duration-300 font-medium"
                      >
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="pb-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-center items-center space-x-2">
              <button className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="w-10 h-10 rounded-full bg-primary-blue-300 text-white flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100 flex items-center justify-center">
                2
              </button>
              <button className="w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100 flex items-center justify-center">
                3
              </button>
              <button className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
    </div>
  );
} 