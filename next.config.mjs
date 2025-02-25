/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [],
    remotePatterns: [],
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig; 