/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/matthew-pinker-com',
  assetPrefix: '/matthew-pinker-com/',
};

export default nextConfig;
