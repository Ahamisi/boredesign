import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import NewsletterSection from '../components/NewsletterSection';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

// SEO metadata for the blog listing page
export const metadata = {
  title: 'Blog | BO Properties',
  description: 'Read the latest articles about real estate trends, investment advice, and property development in Nigeria.',
};

// Define the pagination parameters
interface PageProps {
  searchParams: {
    page?: string
  }
}

export default async function BlogPage({ 
  searchParams 
}: {
  searchParams: { page?: string }
}) {
  const currentPage = Number(searchParams?.page || '1')
  const postsPerPage = 6
  
  // Calculate pagination limits
  const skip = (currentPage - 1) * postsPerPage

  // Query to fetch total count of posts
  const countQuery = groq`count(*[_type == "post" && defined(slug)])`;
  const totalPosts = await client.fetch(countQuery);

  // Calculate total pages
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  // Fetch posts with pagination and sorting by publishedAt
  const query = groq`
    *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [$skip...$end] {
      _id,
      title,
      slug,
      excerpt,
      "author": author->name,
      "authorImage": author->image.asset->url,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,
      publishedAt,
      readTime
    }
  `;
  
  const posts = await client.fetch(query, { 
    skip, 
    end: skip + postsPerPage 
  });

  // Format date function
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <Header isLightMode={true} />
      <main className="pt-24 md:pt-28 pb-16">
        {/* Hero section */}
        <div className="bg-blue-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get the latest insights, news, and updates from the real estate market in Nigeria.
            </p>
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <article key={post._id} className="flex flex-col h-full">
                <Link href={`/blog/${post.slug.current}`} className="block relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-4">
                  <Image 
                    src={post.mainImage || '/placeholder-image.jpg'} 
                    alt={post.mainImageAlt || post.title} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
                <Link href={`/blog/${post.slug.current}`} className="block group">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-blue-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                {currentPage > 1 && (
                  <Link 
                    href={`/blog?page=${currentPage - 1}`}
                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                  >
                    Previous
                  </Link>
                )}
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Link
                    key={page}
                    href={`/blog?page=${page}`}
                    className={`px-4 py-2 border rounded-md ${
                      currentPage === page ? 'bg-primary-blue-300 text-white' : 'hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </Link>
                ))}
                
                {currentPage < totalPages && (
                  <Link
                    href={`/blog?page=${currentPage + 1}`}
                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                  >
                    Next
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

      </main>
      <NewsletterSection />

    </div>
  );
} 