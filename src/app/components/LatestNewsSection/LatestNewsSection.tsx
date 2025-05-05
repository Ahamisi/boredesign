'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { motion, useInView } from 'framer-motion';

interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  mainImage: string;
}

const LatestNewsSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          ref={headerRef}
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Latest news
            </motion.h2>
            <motion.p 
              className="text-gray-600 mt-2"
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              All the latest news and articles from BO properties
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center px-5 py-2 rounded-full text-primary-blue-300 border border-primary-blue-300 hover:bg-primary-blue-50 transition-colors duration-300 text-sm font-medium"
            >
              See all Post
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="h-72 bg-gray-100 rounded-lg animate-pulse"></div>
            ))
          ) : blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <motion.article 
                key={post._id} 
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-4">
                  <motion.div
                    // whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image 
                      src={post.mainImage || '/placeholder-image.jpg'} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-500"
                    />
                  </motion.div>
                </Link>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <motion.h3 
                    className="text-lg font-bold text-gray-800 group-hover:text-primary-blue-300 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + (0.1 * index) }}
                  >
                    {post.title}
                  </motion.h3>
                </Link>
              </motion.article>
            ))
          ) : (
            <motion.p 
              className="col-span-3 text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              No blog posts found.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection; 