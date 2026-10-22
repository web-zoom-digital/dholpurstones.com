import { SITE_URL, SITE_NAME, absoluteUrl } from "./site";

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const webPageLd = (opts: { name: string; description: string; path: string; type?: string }) => ({
  "@context": "https://schema.org",
  "@type": opts.type || "WebPage",
  "@id": `${absoluteUrl(opts.path)}#webpage`,
  url: absoluteUrl(opts.path),
  name: opts.name,
  description: opts.description,
  inLanguage: "en-IN",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
});

export const itemListLd = (name: string, items: { name: string; path?: string; image?: string; description?: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: it.name,
      ...(it.description ? { description: it.description } : {}),
      ...(it.image ? { image: absoluteUrl(it.image) } : {}),
      ...(it.path ? { url: absoluteUrl(it.path) } : {}),
      brand: { "@type": "Brand", name: SITE_NAME },
      manufacturer: { "@id": `${SITE_URL}/#organization` },
    },
  })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const plainListLd = (name: string, items: { name: string; description?: string; image?: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    ...(it.description ? { description: it.description } : {}),
    ...(it.image ? { image: absoluteUrl(it.image) } : {}),
  })),
});
