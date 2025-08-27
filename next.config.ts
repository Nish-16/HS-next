import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "HS-next"; // Change if your repo name is different

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
  unoptimized: true,
},
};

export default nextConfig;
