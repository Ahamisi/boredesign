export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { slug } = params;
  
  // In a real app, fetch the post data from an API or CMS
  // Here we're just simulating it with placeholder data
  const post = {
    title: "Why Real Estate Will Lead The Nigerian Economy As The Largest Sector",
    description: "An analysis of how the real estate sector is positioned to become the largest contributor to Nigeria's GDP in the coming years.",
    publishedAt: "January 15, 2024",
    author: "Idris Momoh",
    coverImage: "/blog/real-estate-nigeria-economy.jpg"
  };
  
  return {
    title: `${post.title} | BO Properties Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: `https://boproperties.ng${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`https://boproperties.ng${post.coverImage}`],
    },
  };
} 