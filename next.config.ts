import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS ? "/drjoseairton" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
