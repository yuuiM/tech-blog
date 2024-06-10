/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/tech-blog' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tech-blog/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
