/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  async rewrites() {
    return [{
      source: '/api/:path*',
      destination: 'http://nft_service:7777/:path*',
    }];
  },
};

module.exports = nextConfig;
