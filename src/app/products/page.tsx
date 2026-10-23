import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/ui/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, itemListLd, faqLd } from "@/lib/schema";
import FaqSection from "@/components/FaqSection";
import { generalFaqs } from "@/data/faqs";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import ContactActions from "@/components/ui/ContactActions";
import Navbar from "@/components/Navbar";
import StoneTechnicalSpecsTable from "@/components/StoneTechnicalSpecsTable";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { categories, waLink } from "@/data/catalog";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Products – Sandstone, Marble, Stone Articles, Semi-Precious & Imported Stones",
  description:
    "Explore Dholpurstones.com collections: Dholpur sandstone (Agra Red, Beige, Pink, Chocolate), beige, white and grey marble, farm house & garden stonework, hand-carved stone articles, semi-precious stones and exclusive imported stones.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Natural Stone Products & Collections",
    description:
      "Sandstone, marble, garden stonework, stone articles, semi-precious and imported stones — direct from the mine owner.",
    url: "/products",
    siteName: "Dholpurstones.com",
    images: [
      {
        url: "/assets/material-sandstone.jpg",
        width: 1200,
        height: 630,
        alt: "Dholpur sandstone products",
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />

      <PageHero
        eyebrow="Mine To Export"
        title="Our Products &"
        accent="Collections"
        description="Five collections, one trusted source. Choose a category to see colours, varieties and details."
        image="/assets/hero-quarry.jpg"
        crumbs={[{ label: "Products" }]}
      >
        <ContactActions cta="Products hero" topic="natural stone" size="lg" layout="row" className="sm:justify-start" />
      </PageHero>

      <section className="section-y bg-ivory">
        <div className="container-x">
          <SectionHeader
            eyebrow="Browse By Category"
            title="Find Your Stone"
            subtitle="Every collection below links to its own page with full details."
          />

          <div className="space-y-5 sm:space-y-7">
            {categories.map((cat, i) => (
              <Reveal key={cat.id}>
                <article className="group grid overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white shadow-[0_12px_36px_-20px_rgba(18,61,50,0.35)] transition-shadow hover:shadow-[0_28px_56px_-24px_rgba(18,61,50,0.4)] md:grid-cols-12">
                  <Link
                    href={cat.href}
                    className={`relative aspect-[16/10] overflow-hidden bg-forest md:col-span-5 md:aspect-auto md:min-h-[260px] ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                    aria-label={cat.name}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-forest-deep/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                      {cat.badge}
                    </span>
                  </Link>
                  <div className="flex flex-col justify-center p-5 sm:p-8 md:col-span-7">
                    <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-ink sm:text-2xl">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{cat.blurb}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {cat.subs.map((s) => (
                        <li key={s.id}>
                          <Link
                            href={s.href}
                            className="inline-block rounded-full border border-forest/15 bg-ivory px-3.5 py-1.5 text-[13px] font-semibold text-forest transition-colors hover:border-gold hover:bg-gold/20"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button href={cat.href} variant="forest">
                        Explore {cat.name}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StoneTechnicalSpecsTable />

      <FaqSection faqs={generalFaqs} tone="white" />
      <CtaBand title="Not Sure Which Stone Is Right?" text="Describe your project and we will recommend the best stone, finish and size." topic="natural stone for my project" cta="Products bottom band" />
      <JsonLd data={[breadcrumbLd([{ name: "Products", path: "/products" }]), faqLd(generalFaqs)]} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
