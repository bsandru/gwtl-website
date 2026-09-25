import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // 168 covers the header logo (81px wide) on 2x screens without jumping to 256
    imageSizes: [32, 48, 64, 96, 128, 168, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "globalwomentechleaders.com",
      }
    ],
  },
};

export default nextConfig;
