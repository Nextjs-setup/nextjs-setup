import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental:{
    optimizeCss:true,
    scrollRestoration: true,
  },
  images:{
    formats: ['image/avif','image/webp']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV ==='production',
  }
  
};

export default nextConfig;
