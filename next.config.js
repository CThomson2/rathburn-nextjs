
/**@type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: isProd ? "/tailwind/app/ynex-ts/preview" : undefined,
	assetPrefix : isProd ? "/tailwind/app/ynex-ts/preview" : undefined,
  images: {
    loader: "imgix",
    path: "/",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
