/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // voor GitHub Pages: statische export naar out/
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
