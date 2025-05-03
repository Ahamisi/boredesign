'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  mainImage: string;
}

const LatestNewsSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = groq`
        *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
          _id,
          title,
          "slug": slug.current,
          "mainImage": mainImage.asset->url
        }
      `;
      
      try {
        const posts = await client.fetch(query);
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="h-72 bg-gray-100 rounded-lg animate-pulse"></div>
            ))
          ) : blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <article key={post._id} className="flex flex-col h-full">
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={post.mainImage || '/placeholder-image.jpg'} 
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
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No blog posts found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection; 