import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "http",
        hostname: "khotixs-assets.devkh.asia",
      },
      {
        protocol: "http",
        hostname: "khotixs.devkh.asia",
      }
    ]
  },
};

export default nextConfig;