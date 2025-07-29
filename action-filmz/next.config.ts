import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["qsxdjqkqceaoqcbmogcm.supabase.co", "drive.google.com"],
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'drive.google.com',
      pathname: '/uc',
    },
  ],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
