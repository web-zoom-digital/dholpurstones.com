import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { categories } from "@/data/catalog";
import { breadcrumbLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sitemap – All Pages",
  description: "Find every page on Dholpurstones.com — products, projects, farm house & garden stonework, blog and contact.",
  alternates: { canonical: "/sitemap" },
};

const groups = [
  {
    title: "Products",
    links: [{ label: "All Products", href: "/products" }, ...categories.map((c) => ({ label: c.name, href: c.href }))],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Guides", href: "/blog" },
      { label: "Quality Process", href: "/resources#quality" },
      { label: "Packaging & Machinery", href: "/resources#packaging" },
      { label: "Exhibitions", href: "/resources#exhibition" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <PageHero
        eyebrow="Find Your Way"
        title="Site"
        accent="Map"
        description="Every page on Dholpurstones.com in one place."
        image="/assets/hero-quarry.jpg"
        crumbs={[{ label: "Sitemap" }]}
      />
      <section className="section-y">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="h-full rounded-[1.5rem] border border-black/[0.06] bg-white p-6 shadow-sm">
                <h2 className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-gold-deep">{g.title}</h2>
                <ul className="mt-3 space-y-0.5">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="inline-block py-1.5 text-[15px] font-semibold text-ink transition-colors hover:text-gold-deep">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <JsonLd data={breadcrumbLd([{ name: "Sitemap", path: "/sitemap" }])} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
