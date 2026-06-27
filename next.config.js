/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // সব ধরনের ইমেজ সিডিএন এবং ImgBB সাপোর্ট করার জন্য
      },
    ],
  },
};

module.exports = nextConfig;
