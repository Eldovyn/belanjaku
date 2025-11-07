/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ['img.daisyui.com', 'plus.unsplash.com', 'images.unsplash.com', 'api.sandbox.midtrans.com'],
  },
};

export default nextConfig;
