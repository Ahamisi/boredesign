import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bopropertiesng.com'
  
  // Static pages with SEO-optimized priorities
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Project pages with high priority for investment properties
  const projectPages = [
    'project-rio',    // High priority - ongoing project in Ikeja
    'primero',        // Shortlet property in Bariga
    'queens-court',   // Student hostel in Akoka
    'estellar',       // Apartment building in Akoka
    'estellar-prime', // Ongoing project in Yaba
    'basic'
  ].map(slug => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: slug === 'project-rio' ? 0.9 : 0.8, // Higher priority for Project Rio
  }))

  // Service pages - Updated to match actual service slugs from your services page
  const servicePages = [
    'development',     // Property Development and Construction
    'sales',          // Property Sales and Leasing
    'consultancy',    // Real Estate Consultancy
    'management'      // Facility Management
  ].map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    ...staticPages,
    ...projectPages,
    ...servicePages,
  ]
}