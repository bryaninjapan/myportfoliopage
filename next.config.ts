import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 启用静态导出
  basePath: "/myportfoliopage", // 仓库名称
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 图片优化
  },
};

export default nextConfig;
