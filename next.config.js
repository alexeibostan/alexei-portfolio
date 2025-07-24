const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.BASE_PATH, // Set basePath from environment variable
};

module.exports = withNextIntl(nextConfig);
