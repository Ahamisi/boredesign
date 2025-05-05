// @ts-nocheck
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import NewsletterSection from '../../components/NewsletterSection'
import type { Metadata as NextMetadata } from 'next'

// For response/data objects
type SanityDocument = {
  _id: string;
  title?: string;
  mainImage?: { 
    asset?: { 
      url?: string;
      _ref?: string;
    };
    alt?: string;
  };
  slug?: { current?: string };
  publishedAt?: string;
  author?: { name?: string; image?: { asset?: { url?: string; _ref?: string } } };
  categories?: Array<{ title?: string }>;
  body?: any; // We'll leave this as any for now since it's a complex Portable Text structure
  excerpt?: string;
  readTime?: number;
  [key: string]: any;
};

// Create the portableTextComponents for the blog content
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 my-8">
          <Image
            src={value.asset.url}
            alt={value.alt || ''}
            fill
            className="object-cover rounded-lg"
          />
          {value.caption && (
            <p className="text-center text-gray-500 mt-2">{value.caption}</p>
          )}
        </div>
      )
    }
  },
  block: {
    h2: ({children}: any) => <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">{children}</h3>,
    h4: ({children}: any) => <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">{children}</h4>,
    normal: ({children}: any) => <p className="text-gray-700 mb-4">{children}</p>
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = value.blank ? 'noreferrer noopener' : undefined
      return (
        <a 
          href={value.href} 
          rel={rel} 
          target={value.blank ? '_blank' : '_self'}
          className="text-primary-blue-300 underline"
        >
          {children}
        </a>
      )
    }
  }
}

// Generate dynamic metadata per blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      excerpt,
      "author": author->name,
      "publishedAt": publishedAt,
      mainImage,
      "seo": seo {
        metaTitle,
        metaDescription,
        keywords
      }
    }
  `
  
  const post = await client.fetch(query, { slug: params.slug })
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | BO Properties',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.seo?.metaTitle || `${post.title} | BO Properties Blog`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords || [],
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.mainImage?.asset?.url ? [
        {
          url: post.mainImage.asset.url,
          width: 1200,
          height: 630,
          alt: post.mainImage.alt || post.title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
    },
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const query = groq`*[_type == "post" && defined(slug.current)][].slug.current`
  const slugs = await client.fetch(query)
  return slugs.map((slug: string) => ({ slug }))
}

type Params = {
  slug: string;
};

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = params;
  
  // Query to fetch the specific blog post
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      body,
      excerpt,
      "author": author->{
        name,
        "image": image.asset->url,
        role
      },
      "mainImage": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,
      publishedAt,
      readTime,
      "categories": categories[]->title,
      "relatedPosts": *[_type == "post" && slug.current != $slug && count((categories[]->._id)[@ in ^.^.categories[]->._id]) > 0] | order(publishedAt desc)[0..1] {
        _id,
        title,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        publishedAt
      }
    }
  `
  
  const post = await client.fetch(query, { slug })
  
  if (!post) {
    // Handle case where post doesn't exist
    return (
      <div className="bg-white min-h-screen">
        <Header isLightMode={true} />
        <main className="pt-24 md:pt-28">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-8">The post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
            <Link href="/blog" className="inline-flex items-center text-primary-blue-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all blog posts
            </Link>
          </div>
        </main>
      </div>
    )
  }

  // Format date
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="bg-white min-h-screen">
      <Header isLightMode={true} />
      <main className="pt-24 md:pt-28">
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
            <li className="text-primary-blue-300 font-medium truncate">{post.title}</li>
          </ol>
        </nav>

        <div className="w-full px-4 md:px-8 bg-gray-100">
          <article className="container mx-auto px-4 md:px-8 pt-10 pb-16">
            <header className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-8">
                {post.author.image ? (
                  <Image 
                    src={post.author.image} 
                    alt={post.author.name} 
                    width={48} 
                    height={48} 
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary-blue-300 flex items-center justify-center text-white">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="flex items-center">
                    <p className="text-base font-medium text-gray-800">{post.author.name}</p>
                    <span className="mx-2 text-gray-400">•</span>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                  <p className="text-sm text-gray-500">{formatDate(post.publishedAt)} • {post.readTime} min read</p>
                </div>
              </div>
            </header>
            
            {/* Featured image */}
            <div className="relative aspect-[16/9] w-full mb-10">
              <Image 
                src={post.mainImage || '/placeholder-image.jpg'} 
                alt={post.mainImageAlt || post.title} 
                fill 
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            {/* Article content */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-li:text-gray-700 mb-16">
              <PortableText 
                value={post.body} 
                components={portableTextComponents}
              />
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
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Related Blogs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((relatedPost: any) => (
                    <Link 
                      key={relatedPost._id} 
                      href={`/blog/${relatedPost.slug}`}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image 
                          src={relatedPost.mainImage} 
                          alt={relatedPost.title} 
                          fill 
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-primary-blue-300 transition-colors duration-300">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{formatDate(relatedPost.publishedAt)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
        
        <NewsletterSection />
      </main>
    </div>
  )
} 