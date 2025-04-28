'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  coverImage: string;
}

const LatestNewsSection: React.FC = () => {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      slug: 'why-real-estate-will-lead-the-nigerian-economy',
      title: 'Why Real Estate Will Lead The Nigerian Economy As The Largest Sector',
      coverImage: '/blog/real-estate-leading.jpg',
    },
    {
      id: '2',
      slug: 'smart-way-to-build-wealth-real-estate-investment',
      title: 'The Smart Way to Build Wealth: Real Estate Investment Simplified',
      coverImage: '/blog/smartway-to-build-wealth.jpg',
    },
    {
      id: '3',
      slug: 'why-real-estate-will-lead-the-nigerian-economy-2',
      title: 'Why Real Estate Will Lead The Nigerian Economy As The Largest Sector',
      coverImage: '/blog/why-real-estate-will-lead-nigerian-economy.jpg',
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Latest news
            </h2>
            <p className="text-gray-600 mt-2">
              All the latest news and articles from BO properties
            </p>
          </div>
          <Link 
            href="/blog" 
            className="inline-flex items-center px-5 py-2 rounded-full text-primary-blue-300 border border-primary-blue-300 hover:bg-primary-blue-50 transition-colors duration-300 text-sm font-medium"
          >
            See all Post
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col h-full">
              <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-4">
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
              <Link href={`/blog/${post.slug}`} className="block group">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-blue-300 transition-colors duration-300">
                  {post.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection; 