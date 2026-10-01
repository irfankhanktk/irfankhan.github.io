import type { NextConfig } from "next";

/**
 * GitHub Pages serves static files, so the site is exported to `out/`.
 *
 * NEXT_PUBLIC_BASE_PATH is set automatically by the GitHub Actions workflow:
 *  - ""                     for a user site  (https://<user>.github.io)
 *  - "/<repo-name>"         for a project site (https://<user>.github.io/<repo-name>)
 * Leave it unset locally.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // GitHub Pages has no image optimization server.
  images: { unoptimized: true },
};

export default nextConfig;
