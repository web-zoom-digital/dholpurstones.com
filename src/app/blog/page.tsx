import React from "react";
import type { Metadata } from "next";
import BlogListClient from "./BlogListClient";
import { BLOG_POSTS } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Architectural Sandstone Blog & Technical Insights | Dholpurestones (Estd. 1953)",
  description:
    "Expert architectural guides, geotechnical test reports, Shilpa Shastra stone carving treatises, and facade engineering insights on authentic Dholpur and Agra sandstone.",
  alternates: {
    canonical: "https://dholpurestones.com/blog",
  },
  openGraph: {
    title: "Architectural Sandstone Blog & Insights | Dholpurestones.com",
    description:
      "Comprehensive architectural guides on Dholpur Beige, Agra Red, luxury farmhouse paving, monolithic Shilpa Shastra carvings, and 300+ front elevation concepts.",
    url: "https://dholpurestones.com/blog",
    siteName: "Dholpurestones",
    images: [
      {
        url: "https://dholpurestones.com/assets/blog/dholpur-beige-facade.jpg",
        width: 1200,
        height: 675,
        alt: "Dholpurestones Architectural Sandstone Blog & Facade Engineering Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural Sandstone Blog | Dholpurestones",
    description:
      "Geotechnical guides, quarry technical reports, and luxury estate stone carving documentation.",
    images: ["https://dholpurestones.com/assets/blog/dholpur-beige-facade.jpg"],
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Structured Data: CollectionPage + ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://dholpurestones.com/blog#webpage",
                "url": "https://dholpurestones.com/blog",
                "name": "Natural Sandstone Architecture & Engineering Blog",
                "description":
                  "Architectural guides, quarry technical reports, and facade engineering insights on authentic Rajasthan sandstone.",
                "isPartOf": {
                  "@id": "https://dholpurestones.com/#website",
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://dholpurestones.com",
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Architectural Blog",
                      "item": "https://dholpurestones.com/blog",
                    },
                  ],
                },
              },
              {
                "@type": "ItemList",
                "@id": "https://dholpurestones.com/blog#itemlist",
                "itemListElement": BLOG_POSTS.map((post, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "url": `https://dholpurestones.com/blog#${post.slug}`,
                  "name": post.title,
                  "description": post.excerpt,
                  "image": `https://dholpurestones.com${post.featuredImage}`,
                })),
              },
            ],
          }),
        }}
      />
      <BlogListClient />
    </>
  );
}
