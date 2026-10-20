import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ChevronRight, Home as HomeIcon, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Official Works | B P Garg & Sons | Dholpurestones",
  description:
    "Direct connect with Mr. Arvind Garg (Awarded by Govt. of India). WhatsApp: +91 94149 45457, Call: +91 90573 55232. Works: B P Garg & Sons, Near RAC line, Mothiyapura road, Sarmathura 328026 Dholpur, Rajasthan, India.",
  alternates: {
    canonical: "https://dholpurestones.com/contact",
  },
  openGraph: {
    title: "Contact Garg Corporation Ltd. & B P Garg & Sons | Dholpurestones",
    description:
      "Direct quarry inquiries, factory quotations, architectural sample boxes, and international export tenders.",
    url: "https://dholpurestones.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141A17] selection:bg-[#C29B38] selection:text-black">
      <Navbar />

      {/* Breadcrumb Header */}
      <section className="bg-[#0D1311] text-white py-10 sm:py-14 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C29B38]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C29B38] flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#C29B38] font-semibold">Contact &amp; Credentials</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C29B38]/15 border border-[#C29B38]/30 mb-3">
            <Phone className="w-3 h-3 text-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C29B38] tracking-[0.2em] uppercase">
              DIRECT FACTORY COMMUNICATIONS
            </span>
          </div>

          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
            Connect With Our Leadership
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
            Direct coordination with Managing Director Mr. Arvind Garg (Awarded by Govt. of India).
            Serving architects, project builders, government tender authorities, and overseas importers.
          </p>
        </div>
      </section>

      {/* Core Contact & FAQ Components */}
      <ContactSection />
      <FAQSection />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
