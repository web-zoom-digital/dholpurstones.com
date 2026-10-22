import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ALL_BLOG_POSTS } from "@/data/blogData";

// Bump when page content changes so crawlers re-visit.
const SITE_UPDATED = new Date("2026-10-23T00:00:00.000Z");

const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, freq: "weekly" },
  { path: "/products", priority: 0.95, freq: "weekly" },
  { path: "/sandstone", priority: 0.95, freq: "weekly" },
  { path: "/marble", priority: 0.9, freq: "weekly" },
  { path: "/farmhouse-gardens", priority: 0.95, freq: "weekly" },
  { path: "/articles", priority: 0.9, freq: "weekly" },
  { path: "/semi-precious", priority: 0.85, freq: "weekly" },
  { path: "/exclusive-imported", priority: 0.85, freq: "weekly" },
  { path: "/precious-gem-surface", priority: 0.8, freq: "monthly" },
  { path: "/products/white-series-dolphur-color", priority: 0.75, freq: "monthly" },
  { path: "/projects", priority: 0.9, freq: "monthly" },
  { path: "/about", priority: 0.85, freq: "monthly" },
  { path: "/contact", priority: 0.9, freq: "monthly" },
  { path: "/gallery", priority: 0.7, freq: "monthly" },
  { path: "/resources", priority: 0.7, freq: "monthly" },
  { path: "/blog", priority: 0.9, freq: "weekly" },
  { path: "/sitemap", priority: 0.3, freq: "monthly" },
  { path: "/privacy-policy", priority: 0.2, freq: "yearly" },
  { path: "/terms", priority: 0.2, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: SITE_UPDATED,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  const blogEntries = ALL_BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
