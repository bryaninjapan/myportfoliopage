import type { NextConfig } from "next";

// Check if we're building for GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  // Set basePath for GitHub Pages (repository name is "myportfoliopage")
  basePath: isGitHubPages ? "/myportfoliopage" : "",
  // Ensure static export works correctly
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
