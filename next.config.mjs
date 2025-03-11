import { withSentryConfig } from "@sentry/nextjs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add these settings to ensure API routes work properly
  reactStrictMode: true,
  // Ensure no static export is attempted for API routes
  output: "standalone",

  // Update experimental options with correct naming
  experimental: {
    // Remove the invalid cacheMaxMemorySize option
    // Instead, use valid experimental options for Next.js 14.2.24
    instrumentationHook: true,
    serverComponentsExternalPackages: ["serialport"],
    esmExternals: "loose",
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },

  // Configure webpack with memory caching instead of disabling
  webpack: (config) => {
    // Use memory caching instead of filesystem to avoid snapshot errors
    config.cache = {
      type: "memory",
      // Other cache settings can still be included if needed
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

  // Set the source directory to src
  distDir: ".next",

  // Enable static optimization where possible
  optimizeFonts: true,

  // Configure image optimization
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },

  // Set up redirects
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // Sentry configuration
  sentry: {
    hideSourceMaps: true,
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

export default withSentryConfig(
  withSentryConfig(
    nextConfig,
    {
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options

      // Suppresses source map uploading logs during build
      silent: true,
      org: "rathburn-chemicals",
      project: "javascript-nextjs",
    },
    {
      // For all available options, see:
      // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

      // Upload a larger set of source maps for prettier stack traces (increases build time)
      widenClientFileUpload: true,

      // Transpiles SDK to be compatible with IE11 (increases bundle size)
      transpileClientSDK: true,

      // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
      // This can increase your server load as well as your hosting bill.
      // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
      // side errors will fail.
      // tunnelRoute: "/monitoring",

      // Hides source maps from generated client bundles
      hideSourceMaps: true,

      // Automatically tree-shake Sentry logger statements to reduce bundle size
      disableLogger: true,

      // Enables automatic instrumentation of Vercel Cron Monitors.
      // See the following for more information:
      // https://docs.sentry.io/product/crons/
      // https://vercel.com/docs/cron-jobs
      automaticVercelMonitors: true,
    }
  ),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "rathburn-chemicals",
    project: "javascript-nextjs",

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Automatically annotate React components to show their full name in breadcrumbs and session replay
    reactComponentAnnotation: {
      enabled: true,
    },

    // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    // tunnelRoute: "/monitoring",

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
