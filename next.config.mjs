import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Change from "export" to "standalone" for EC2 deployment
  output: "standalone",

  // Keep these settings from the original template
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,

  // Only use these in production mode, and only if needed for the template
  // If you're deploying to your own domain on EC2, you might not need these
  // basePath: isProd ? "/tailwind/app/ynex-ts/preview" : undefined,
  // assetPrefix: isProd ? "/tailwind/app/ynex-ts/preview" : undefined,

  // Update image configuration for standalone deployment
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
    // Fallback to the unoptimized loader if needed
    unoptimized: process.env.NODE_ENV !== "production",
  },

  // Experimental options from your previous configuration
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: ["serialport"],
    esmExternals: "loose",
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === "production",
  },

  typescript: {
    // Decide if you want to ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },

  // Webpack configuration from your previous setup
  webpack: (config) => {
    // Use memory caching instead of filesystem to avoid snapshot errors
    config.cache = {
      type: "memory",
      maxGenerations: 1,
    };

    // Add path aliases to ensure they work in production
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "./"),
      "@/components": path.join(__dirname, "components"),
      "@/features": path.join(__dirname, "features"),
      "@/styles": path.join(__dirname, "styles"),
      "@/types": path.join(__dirname, "types"),
      "@/utils": path.join(__dirname, "utils"),
      "@/app": path.join(__dirname, "app"),
    };

    return config;
  },

  // Configure headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
