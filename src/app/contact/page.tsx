import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import EnquiryForm from "@/components/EnquiryForm";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { generalFaqs } from "@/data/faqs";
import { waLink, EMAIL, PHONE_PRIMARY, PHONE_SECONDARY } from "@/data/catalog";
import { breadcrumbLd, faqLd, webPageLd } from "@/lib/schema";
import { LuMail as Mail, LuMapPin as MapPin, LuPhone as Phone, LuClock as Clock } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Contact Dholpurstones – Get a Free Quote for Sandstone, Marble & Stone Work",
  description:
    "Contact Dholpurstones.com (B P Garg & Sons) in Dholpur, Rajasthan. WhatsApp +91 94149 45457, call +91 90573 55232 or send an enquiry for sandstone, marble, farm house stonework and exports. Mon–Sat, 9 am–7 pm IST.",
  keywords: ["Dholpur stone contact", "Dholpur sandstone supplier phone number", "sandstone manufacturer Dholpur address", "B P Garg & Sons Dholpur"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Dholpurstones.com — Free Quote",
    description: "WhatsApp, call or send an enquiry. Mine owner, manufacturer and exporter since 1953.",
    url: "/contact",
    images: [{ url: "/assets/quarry_mining_operations.jpg", width: 1376, height: 768, alt: "Dholpurstones quarry and works, Dholpur" }],
  },
};

const cards = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: PHONE_PRIMARY,
    href: waLink("Hello Dholpurstones.com, I would like to enquire about natural stone."),
    note: "Fastest reply",
    green: true,
  },
  { icon: Phone, label: "Call", value: PHONE_SECONDARY, href: "tel:+919057355232", note: "Mon–Sat, 9 am–7 pm" },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, note: "For drawings & tenders" },
  {
    icon: MapPin,
    label: "Visit our works",
    value: "Near RAC line, Mothiyapura Road, Dholpur 328026",
    href: "https://www.google.com/maps/dir/?api=1&destination=26.5492,77.2917",
    note: "Get directions",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <PageHero
        eyebrow="Get In Touch"
        title="Request A"
        accent="Free Quote"
        description="Tell us what you need. Mr. Arvind Garg's team replies with samples, options and pricing — for architects, builders, farm house owners and overseas importers."
        image="/assets/hero-quarry.jpg"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section-y">
        <div className="container-x">
          <Stagger className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-3.5">
            {cards.map((c) => {
              const Icon = c.icon as React.ComponentType<{ className?: string }>;
              return (
                <StaggerItem key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col rounded-[1.5rem] border border-black/[0.06] bg-white p-4 shadow-sm sm:p-5 transition-all hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        c.green ? "bg-[#25D366] text-white" : "bg-forest text-gold"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${c.green ? "fill-white" : ""}`} />
                    </span>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-muted">{c.label}</p>
                    <p className="mt-1 break-words text-[15px] font-bold leading-snug text-ink">{c.value}</p>
                    <p className="mt-auto pt-3 text-[13px] font-semibold text-gold-deep">{c.note} →</p>
                  </a>
                </StaggerItem>
              );
            })}
          </Stagger>

          <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-12">
            <Reveal className="lg:col-span-3">
              <div className="rounded-[2rem] bg-forest p-5 sm:p-8 bg-stone-grain">
                <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                  Send Us Your Requirement
                </h2>
                <p className="mb-6 mt-2 text-sm text-white/70">
                  The more detail you share — stone, size, quantity, city — the faster we can quote.
                </p>
                <EnquiryForm cta="Contact page form" />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="space-y-5 lg:col-span-2">
              <div className="rounded-[1.75rem] border border-black/[0.06] bg-white p-5 sm:p-6">
                <h3 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-ink">
                  <Clock className="h-4 w-4 text-gold-deep" /> Working Hours
                </h3>
                <p className="mt-2 text-[15px] text-muted">Monday – Saturday, 9:00 am – 7:00 pm IST</p>
                <h3 className="mt-5 font-heading text-sm font-bold uppercase tracking-wider text-ink">Managing Director</h3>
                <p className="mt-2 text-[15px] text-muted">
                  Mr. Arvind Garg — awarded by the Government of India for 300+ sandstone front elevation designs.
                </p>
                <h3 className="mt-5 font-heading text-sm font-bold uppercase tracking-wider text-ink">Our Locations</h3>
                <ul className="mt-2 space-y-1 text-[15px] text-muted">
                  <li><strong className="text-ink">Dholpur</strong> — quarries &amp; works</li>
                  <li><strong className="text-ink">Sikandra</strong> — hand-carving works</li>
                  <li><strong className="text-ink">Kishangarh</strong> — trading hub</li>
                  <li><strong className="text-ink">Canada</strong> — overseas office</li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white">
                <iframe
                  title="Dholpurstones works location map"
                  src="https://maps.google.com/maps?q=26.5492,77.2917&hl=en&z=13&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["/assets/garg/card_gcl.jpg", "/assets/garg/card_saroj.jpg"].map((src) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
                    <Image src={src} alt="Dholpurstones visiting card" fill sizes="25vw" className="object-contain p-1" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection faqs={generalFaqs} tone="white" />

      <JsonLd
        data={[
          webPageLd({ name: "Contact Dholpurstones.com", description: "Contact details, enquiry form and location of Dholpurstones.com", path: "/contact", type: "ContactPage" }),
          breadcrumbLd([{ name: "Contact", path: "/contact" }]),
          faqLd(generalFaqs),
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
