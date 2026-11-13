/** @type {import('next').NextConfig} */
const nextConfig = {
  // self-contained server in .next/standalone for the VPS (no npm install needed there)
  output: 'standalone',
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
