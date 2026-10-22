import React from "react";
import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Stone Quality, Technical Specifications & Export Packaging",
  description:
    "Engineering technical data, ASTM C616 physical properties, IS:3622 test criteria, ISO compliance, 8-axis CNC fabrication, ISPM-15 export crating, and stone industry insights.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Technical Specifications, Quality Control & Stone Resources | Dholpurstones",
    description:
      "Access certified laboratory test reports (compressive strength >68 MPa, water absorption <1.15%), CNC profiling machinery standards, and export packaging specifications.",
    url: "/resources",
    siteName: "Dholpurstones",
    images: [
      {
        url: "/assets/products/real_dholpur_beige_tiles_quarry_yard.jpg",
        width: 1200,
        height: 630,
        alt: "Dholpurstones Technical Testing and Factory Quality Control Yard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Specifications & Stone Testing Standards | Dholpurstones",
    description:
      "ASTM C616 & IS:3622 certified laboratory test criteria, 8-axis CNC fabrication tolerances, and ISPM-15 export crating.",
    images: ["/assets/products/real_dholpur_beige_tiles_quarry_yard.jpg"],
  },
};

const resourcesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dholpurstones.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources & Technical Specifications",
          "item": "https://www.dholpurstones.com/resources"
        }
      ]
    },
    {
      "@type": "TechArticle",
      "@id": "https://www.dholpurstones.com/resources#article",
      "headline": "Authentic Dholpur Sandstone Technical Specifications, Geotechnical Properties & Testing Protocols",
      "description": "Comprehensive engineering analysis of Dholpur Sandstone comparing compressive strength, water absorption, flexural strength, and density against ASTM C616 and IS:3622 standards.",
      "author": {
        "@type": "Organization",
        "name": "Dholpurstones.com Technical Bureau"
      },
      "publisher": {
        "@id": "https://www.dholpurstones.com/#organization"
      },
      "inLanguage": "en"
    }
  ]
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesJsonLd) }}
      />
      <ResourcesClient />
    </>
  );
}
