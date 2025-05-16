import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "images.pexels.com"],
  },
};

export default nextConfig;

// images: {
//   remotePatterns: [
//     {
//       protocol: 'https', // Or 'http' if your images are served over HTTP
//       hostname: 'res.cloudinary.com',
//       pathname: '**', // Optional: Allows any path
//     },
//     {
//       protocol: 'https', // Or 'http'
//       hostname: 'another-domain.com',
//       pathname: '**', // Optional: Allows any path
//     },
//   ],
// },
