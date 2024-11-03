/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // for static export
  trailingSlash: true,            // optional: keeps routes consistent
  images: { unoptimized: true }   // disables image optimization
};

export default nextConfig;
