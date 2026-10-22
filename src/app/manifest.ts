import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dholpurstones.com – Natural Stone Since 1953",
    short_name: "Dholpurstones",
    description: "Dholpur sandstone, marble and semi-precious stones — mine owner, manufacturer and exporter since 1953.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F4EB",
    theme_color: "#123D32",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
