import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

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

export default withNextIntl(nextConfig);
