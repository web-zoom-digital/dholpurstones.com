import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  /* Image optimization for Core Web Vitals */
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000, // 30 days
  },

  /* Security Headers */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  /* Permanent 301 redirects to eliminate cannibalization */
  async redirects() {
    return [
      // Canonical host: apex domain -> www
      {
        source: "/:path*",
        has: [{ type: "host", value: "dholpurstones.com" }],
        destination: "https://www.dholpurstones.com/:path*",
        permanent: true,
      },
      {
        source: "/landscaping",
        destination: "/farmhouse-gardens",
        permanent: true,
      },
      {
        source: "/white-series-dolphur-color",
        destination: "/exclusive-imported/white-marble",
        permanent: true,
      },
      {
        source: "/products/white-series-dolphur-color",
        destination: "/exclusive-imported/white-marble",
        permanent: true,
      },
      {
        source: "/marble",
        destination: "/exclusive-imported",
        permanent: true,
      },
      {
        source: "/llms.md",
        destination: "/llms.txt",
        permanent: true,
      },
    ];
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
