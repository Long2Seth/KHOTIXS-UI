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
      },
      {
        protocol: "https",
        hostname: "khotixs.istad.co",
      }
    ],

  },
};

export default nextConfig;