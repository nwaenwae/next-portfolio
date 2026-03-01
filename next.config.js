/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.microlink.io",
      },
    ],
  },
};

module.exports = nextConfig;
