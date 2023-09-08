/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["strapiadmin.drizlymall.com"],
  },
};

module.exports = nextConfig;
