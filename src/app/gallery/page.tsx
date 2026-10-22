import React from "react";
import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Photo & Video Gallery – Dholpur Quarry, Sandstone Carving & Projects",
  description:
    "High-resolution visual archives of Dholpur quarry benches, master sculptor ateliers in Sikandra, CNC fluted cladding panels, calibrated sandstone yard, and monumental landmark installations.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Visual Gallery & Craftsmanship Archive | Dholpurestones.com",
    description:
      "Inspect high-resolution imagery and video footage of authentic Dholpur Sandstone extraction, hand-carved heritage sculptures, and finished architectural facades.",
    url: "/gallery",
    siteName: "Dholpurestones",
    images: [
      {
        url: "/assets/garg/clean_peacock_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dholpurestones Quarry & Artisanal Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual Gallery & Craftsmanship Archive | Dholpurestones",
    description:
      "Dholpur sandstone mines, generational stone sculptors, and monumental project execution photography.",
    images: ["/assets/garg/clean_peacock_hero.jpg"],
  },
};

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://dholpurestones.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Gallery",
          "item": "https://dholpurestones.com/gallery"
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://dholpurestones.com/gallery#webpage",
      "url": "https://dholpurestones.com/gallery",
      "name": "Dholpurestones Visual Gallery & Architectural Showcase",
      "description": "Visual archive of quarry operations, master stone masons, and monumental landmark stone installations.",
      "publisher": {
        "@id": "https://dholpurestones.com/#organization"
      }
    }
  ]
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <GalleryClient />
    </>
  );
}
