import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Hostinger shared hosting
  output: 'export',
  // Ensures each route gets its own folder (e.g. /about/index.html)
  trailingSlash: true,
  images: {
    // Required for static export — disables server-side image optimization
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
