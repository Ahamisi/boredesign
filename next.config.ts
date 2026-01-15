import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    // Force unoptimized images to bypass Sharp/IPX issues on Netlify
    // According to Next.js docs: https://nextjs.org/docs/app/api-reference/components/image#unoptimized
    // GitHub discussion: https://github.com/vercel/next.js/discussions/50028
    // Setting to true globally ensures images work on Netlify (slight performance trade-off)
    unoptimized: true,
  },
  // Disable TypeScript checks during build
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  
  // If you have ESLint errors also add:
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
