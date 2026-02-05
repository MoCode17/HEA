import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
