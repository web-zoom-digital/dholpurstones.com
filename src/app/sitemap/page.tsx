import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuMapPin as MapPin,
  LuLayers as Layers,
  LuBuilding2 as Building2,
  LuTreePine as TreePine,
  LuBookOpen as BookOpen,
  LuCamera as Camera,
  LuShieldCheck as ShieldCheck,
  LuFileText as FileText,
  LuPhone as Phone,
  LuCompass as Compass
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "HTML Sitemap & Architectural Index | Dholpurestones (Estd. 1953)",
  description:
    "Complete directory of all pages, product categories, architectural portfolio projects, technical testing standards, and corporate information across Dholpurestones.com.",
  alternates: {
    canonical: "https://dholpurestones.com/sitemap",
  },
  openGraph: {
    title: "HTML Sitemap & Architectural Index | Dholpurestones.com",
    description:
      "Full directory index of natural stone products, turnkey projects, quarry operations, and engineering specifications.",
    url: "https://dholpurestones.com/sitemap",
    siteName: "Dholpurestones",
  },
  twitter: {
    card: "summary",
    title: "HTML Sitemap & Directory | Dholpurestones.com",
    description: "Hierarchical site directory for crawlers, architects, and visitors.",
  },
};

interface SitemapGroup {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  links: {
    title: string;
    href: string;
    description: string;
    badge?: string;
  }[];
}

const sitemapData: SitemapGroup[] = [
  {
    category: "Specialized Architectural Domains",
    icon: TreePine,
    description: "Tailored turnkey natural stone solutions for luxury country estates, private residences, and gardens.",
    links: [
      {
        title: "Luxury Farm House & Garden Landscaping",
        href: "/farmhouse-gardens",
        description: "Turnkey sandstone solutions, 300+ front elevation designs, carriage driveways, carved gazebos, and poolside coping.",
        badge: "Awarded by Govt. of India",
      },
    ],
  },
  {
    category: "Natural Stone Products & Materials",
    icon: Layers,
    description: "Authentic quarry extraction, calibrated floor flagstones, wall cladding, and heritage art.",
    links: [
      {
        title: "All Natural Stone Products & Collections",
        href: "/products",
        description: "Dholpur Sandstone (Red, Pink, Beige, Chocolate), calibrated paving tiles, CNC 3D panels, imported marble, and granite.",
        badge: "Direct Quarry Owner",
      },
    ],
  },
  {
    category: "Monumental Portfolios & Credentials",
    icon: Building2,
    description: "Documented history of turnkey stone supply for national institutions and global landmark projects.",
    links: [
      {
        title: "Signature Landmark Projects Portfolio",
        href: "/projects",
        description: "Parliament House New Delhi, Akshardham Temple, Adani House, AIIMS Bhopal, and Indian Embassies.",
        badge: "National Heritage",
      },
      {
        title: "About B P Garg & Sons Lineage (Estd. 1953)",
        href: "/about",
        description: "Over 70+ years of generational stone mastery, mining concessions, and leadership by Arvind Garg.",
        badge: "Estd. 1953",
      },
      {
        title: "Visual Media, Photo & Video Gallery",
        href: "/gallery",
        description: "High-resolution photo and video archives of quarry benches, Sikandra carving ateliers, and finished facades.",
      },
    ],
  },
  {
    category: "Engineering, Testing & Technical Resources",
    icon: BookOpen,
    description: "Geotechnical test certificates, ASTM C616 standards, IS:3622 compliance, and fabrication machinery.",
    links: [
      {
        title: "Resources & Technical Specifications",
        href: "/resources",
        description: "ASTM C616 physical specs, IS:3620 test data, 8-axis CNC machinery, and ISPM-15 ocean export crating protocols.",
        badge: "Certified Laboratory Data",
      },
      {
        title: "Architectural Articles & Stone Guides",
        href: "/articles",
        description: "In-depth stone guides on compressive load bearing, thermal inertia, Siliceous bonding, and installation methods.",
      },
    ],
  },
  {
    category: "Contact, Works Coordinates & Communications",
    icon: Phone,
    description: "Direct connection with quarry ownership, dispatch yards, and quotation desks.",
    links: [
      {
        title: "Contact Us & Official Dholpur Works",
        href: "/contact",
        description: "Direct WhatsApp (+91 94149 45457), phone lines, sample box requests, and GPS factory coordinates.",
        badge: "Direct Factory Connect",
      },
    ],
  },
  {
    category: "Legal, Governance & Machine Discovery",
    icon: ShieldCheck,
    description: "Statutory governance compliance, digital policies, and open machine-readable endpoints.",
    links: [
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
        description: "Data protection governance under DPDP Act and international architectural confidentiality standards.",
      },
      {
        title: "Terms & Conditions of Supply",
        href: "/terms",
        description: "Standard commercial terms, quotation validity, dimensional gauge tolerances, and logistics protocols.",
      },
      {
        title: "LLMs Documentation Manifest (/llms.txt)",
        href: "/llms.txt",
        description: "Concise, machine-readable Markdown entity dossier for Perplexity, ChatGPT, Claude, and Gemini AI search engines.",
        badge: "AEO / GEO Protocol",
      },
      {
        title: "XML Sitemap (/sitemap.xml)",
        href: "/sitemap.xml",
        description: "Machine-readable XML sitemap index for Googlebot, Bingbot, and automated search engine crawlers.",
      },
    ],
  },
];

const sitemapJsonLd = {
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
          "name": "Sitemap",
          "item": "https://dholpurestones.com/sitemap"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://dholpurestones.com/sitemap#webpage",
      "url": "https://dholpurestones.com/sitemap",
      "name": "Dholpurestones.com Architectural Site Index & HTML Sitemap",
      "description": "Comprehensive hierarchical site directory for human visitors, accessibility screen readers, and search engine crawlers.",
      "publisher": {
        "@id": "https://dholpurestones.com/#organization"
      }
    }
  ]
};

export default function SitemapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapJsonLd) }}
      />
      <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
        <Navbar />

        {/* Breadcrumb Header */}
        <section className="bg-[#123D32] text-white py-10 sm:py-14 border-b border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A15B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#C5A15B] flex items-center gap-1 transition-colors">
                <HomeIcon className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-[#C5A15B] font-semibold">HTML Sitemap</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A15B]/15 border border-[#C5A15B]/30 mb-3">
              <Compass className="w-3 h-3 text-[#C5A15B]" />
              <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C5A15B] tracking-[0.2em] uppercase">
                COMPLETE SITE DIRECTORY &bull; CRAWLER INDEX
              </span>
            </div>

            <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
              Website Index &amp; Directory
            </h1>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
              Explore the entire architecture of Dholpurestones.com. Access material catalogs, landmark portfolios,
              laboratory test reports, contact points, and machine-readable data feeds.
            </p>
          </div>
        </section>

        {/* Directory Groups */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {sitemapData.map((group, groupIdx) => {
              const IconComp = group.icon;
              return (
                <div
                  key={groupIdx}
                  className="bg-white rounded-3xl border border-black/8 shadow-2xs hover:shadow-md transition-all p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-[#F7F4EB] border border-black/6 flex items-center justify-center text-[#123D32]">
                        <IconComp className="w-4 h-4 text-[#C5A15B]" />
                      </div>
                      <h2 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-[#1F2A24] uppercase tracking-wide">
                        {group.category}
                      </h2>
                    </div>
                    <p className="text-xs text-[#6B7C73] leading-relaxed mb-6">
                      {group.description}
                    </p>

                    <ul className="space-y-4">
                      {group.links.map((link, linkIdx) => (
                        <li key={linkIdx} className="border-t border-black/6 pt-3.5 first:border-0 first:pt-0">
                          <Link
                            href={link.href}
                            className="group block"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#1F2A24] group-hover:text-[#123D32] transition-colors">
                                {link.title}
                              </span>
                              {link.badge && (
                                <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F7F4EB] text-[#123D32] border border-black/6 shrink-0 font-mono">
                                  {link.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#6B7C73] leading-relaxed mt-1 group-hover:text-[#1F2A24] transition-colors">
                              {link.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-6 border-t border-black/6 flex items-center justify-between text-[11px] text-[#6B7C73]">
                    <span>Category #{groupIdx + 1}</span>
                    <span className="font-mono text-[#C5A15B] font-bold">{group.links.length} URLs indexed</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
