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
  // 暂时禁用可能导致构建变慢的实验性功能
  // experimental: {
  //   optimizeCss: true,
  // },
};

export default nextConfig; 