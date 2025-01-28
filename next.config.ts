import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
    domains: [
      'gratisography.com',
      'th.bing.com',
      'www.piclumen.com',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com'
    ],

  },
};

export default nextConfig;