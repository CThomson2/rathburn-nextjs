/**
 * @deprecated This file is kept for compatibility.
 * Please use next.config.mjs instead.
 */

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone for EC2 deployment
  output: "standalone",
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  // basePath: isProd ? "/tailwind/app/ynex-ts/preview" : undefined,
  // assetPrefix: isProd ? "/tailwind/app/ynex-ts/preview" : undefined,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
