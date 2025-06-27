const { loadComponents } = require('next/dist/server/load-components');

/**@type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false, // Disable Strict Mode if necessary
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],

    // [new URL('https://res.cloudinary.com/**')],
  },
};

module.exports = nextConfig;
