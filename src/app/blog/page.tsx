import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CtaBand from "@/components/ui/CtaBand";
import BlogIndex from "@/components/blog/BlogIndex";
import { ALL_BLOG_POSTS } from "@/data/blogData";
import { breadcrumbLd, plainListLd, webPageLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stone Guides & Blog – Dholpur Sandstone, Marble, Farm House Stonework",
  description:
    "Buying guides, comparisons and how-tos on Dholpur sandstone, marble, semi-precious stones, farm house and garden stonework, sculptures and stone export — from Dholpurstones.com, mine owners since 1953.",
  keywords: ["Dholpur stone blog", "sandstone buying guide", "marble colour guide", "farm house stone guide", "stone export from India"],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Stone Guides & Blog | Dholpurstones.com",
    description: "Practical guides on sandstone, marble, farm house stonework and stone export.",
    url: "/blog",
    images: [{ url: "/assets/blog/dholpur-beige-facade.jpg", width: 1200, height: 675, alt: "Dholpur sandstone facade" }],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <PageHero
        eyebrow="Learn Before You Buy"
        title="Stone Guides &"
        accent="Insights"
        description="Plain-language guides on sandstone, marble, farm house stonework, carving and export — written by a stone business running since 1953."
        image="/assets/blog/dholpur-beige-facade.jpg"
        crumbs={[{ label: "Blog" }]}
      />
      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow={`${ALL_BLOG_POSTS.length} Articles`} title="Read & Plan Your Project" subtitle="Filter by topic to find the guide you need." />
          <BlogIndex posts={ALL_BLOG_POSTS} />
        </div>
      </section>
      <CtaBand title="Have A Question We Haven't Answered?" text="Ask our team — we reply with advice, samples and a quote." topic="stone for my project" cta="Blog index bottom band" />
      <JsonLd
        data={[
          webPageLd({ name: "Stone Guides & Blog", description: "Guides on sandstone, marble and stonework", path: "/blog", type: "CollectionPage" }),
          breadcrumbLd([{ name: "Blog", path: "/blog" }]),
          {
            ...plainListLd("Dholpurstones.com articles", ALL_BLOG_POSTS.map((p) => ({ name: p.title, description: p.excerpt, image: p.featuredImage }))),
            itemListElement: ALL_BLOG_POSTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/blog/${p.slug}`), name: p.title })),
          },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
