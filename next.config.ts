import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure that trailing slashes are added for standard Apache/cPanel hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
