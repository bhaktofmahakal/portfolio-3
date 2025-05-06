/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
    remotePatterns: [],
    // Only unoptimize in development
    unoptimized: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  // Suppress hydration warnings
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 4,
  },
  // Output as a static site for better performance on Vercel
  output: 'standalone',
}

export default nextConfig
