/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 20,
    unoptimized: true,
  }
};

export default nextConfig;
