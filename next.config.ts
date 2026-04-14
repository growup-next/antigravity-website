import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["ai", "@ai-sdk/react", "@ai-sdk/google"],
  },
};

export default nextConfig;
