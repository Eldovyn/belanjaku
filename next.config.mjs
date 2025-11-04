/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['img.daisyui.com', 'plus.unsplash.com', 'images.unsplash.com'],
  },
};

export default nextConfig;
