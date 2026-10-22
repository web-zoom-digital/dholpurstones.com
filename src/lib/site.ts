/**
 * Central site config. Set NEXT_PUBLIC_SITE_URL in the hosting environment to
 * switch the canonical domain everywhere (metadata, sitemap, schema, IndexNow).
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://dholpurestones.com").replace(/\/$/, "");
export const SITE_NAME = "Dholpurestones.com";
export const LEGAL_NAME = "B P Garg & Sons (Garg Corporation Ltd.)";
export const FOUNDING_YEAR = 1953;

export const absoluteUrl = (path = "") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Business keywords reused in metadata so every page speaks the same language. */
export const CORE_KEYWORDS = [
  "Dholpur stone",
  "Dholpur stones",
  "Dholpur sandstone",
  "Dholpur sandstone manufacturer",
  "Dholpur sandstone quarry owner",
  "Dholpur beige sandstone",
  "Dholpur pink sandstone",
  "Dholpur chocolate sandstone",
  "Agra red sandstone",
  "sandstone exporter India",
  "front elevation sandstone designs",
  "farm house stone work",
  "garden landscaping stone",
  "hand carved stone sculptures",
  "marble supplier Rajasthan",
  "semi precious stone slabs",
  "natural stone manufacturer",
  "Dholpurestones",
];
