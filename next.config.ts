import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from any domain (adjust for production)
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
