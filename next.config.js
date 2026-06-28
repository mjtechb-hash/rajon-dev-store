/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co', 'res.cloudinary.com'],
  },
  experimental: {
    optimizeCss: true,
  },
  swcMinify: true,
}

module.exports = nextConfig
