import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuFileText as FileText
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Official Terms and Conditions of supply, quotation validity, dimensional tolerances, export packaging, and commercial terms for Dholpurstones.com natural stone products.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms & Conditions | Dholpurstones.com",
    description:
      "Official Terms and Conditions of supply, quotation validity, dimensional tolerances, and commercial terms for Dholpurstones.com.",
    url: "/terms",
    siteName: "Dholpurstones",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Dholpurstones.com",
    description: "Commercial terms and supply conditions of Dholpurstones.com (B P Garg & Sons).",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#123D32] text-white py-12 sm:py-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A15B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#C5A15B] flex items-center gap-1 transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#C5A15B] font-semibold">Terms &amp; Conditions</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A15B]/15 border border-[#C5A15B]/30 mb-3">
            <FileText className="w-3.5 h-3.5 text-[#C5A15B]" />
            <span className="font-heading text-[11px] sm:text-xs font-bold text-[#C5A15B] tracking-[0.2em] uppercase">
              COMMERCIAL TERMS &bull; SUPPLY STANDARDS
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
            Terms &amp; Conditions
          </h1>
          <p className="font-body text-xs sm:text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
            Effective Date: October 21, 2026. These commercial terms govern all architectural stone supply agreements, quarry quotations, sample dispatches, and turnkey contracting undertaken by Dholpurstones.com.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 text-sm sm:text-base leading-relaxed text-[#1F2A24]/85">
        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            1. Scope of Agreement &amp; Natural Characteristics
          </h2>
          <p>
            Natural sandstone, marble, and granite are geological products formed over millions of years. Variations in veining, shade, color banding, fossil markings, and grain texture are natural hallmarks of authentic quarry stone and do not constitute manufacturing defects. All samples provided represent general tonal guidelines.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            2. Dimensional Calibration &amp; Tolerances
          </h2>
          <p className="mb-3">
            Unless otherwise agreed in a customized BOQ purchase order:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
            <li><strong>Calibrated Tiles &amp; Slabs:</strong> Standard thickness tolerance is &plusmn;1mm for gangsaw/CNC processed stones.</li>
            <li><strong>Hand-Cut Cobblestones &amp; Flagstones:</strong> Standard thickness tolerance is &plusmn;3mm to &plusmn;5mm owing to traditional artisanal cleft splitting.</li>
            <li><strong>Hand-Carved Sculptures:</strong> Monolithic articles (peacocks, jalis, temple pillars) are hand-chiseled by master artisans; exact artistic contours exhibit minor unique hand-crafted variations.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            3. Quotation Validity &amp; Payment Schedules
          </h2>
          <p>
            Quarry-direct quotations and freight estimates remain valid for thirty (30) calendar days from issuance, subject to diesel price fluctuations and government royalty rates. Standard industrial orders require an advance deposit upon order confirmation, with remaining balance payable prior to factory dispatch or under agreed Letters of Credit (LC) for export shipments.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            4. Export Packaging &amp; Logistics
          </h2>
          <p>
            All international export consignments are packed in heat-treated ISPM-15 certified seaworthy wooden crates lined with high-density foam buffers. Domestic supplies are securely strapped and palletized to minimize transit vibration damage.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            5. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            All commercial transactions, supply contracts, and disputes arising from the use of this website or execution of stone contracts shall be governed by the laws of India, subject to the exclusive jurisdiction of the competent courts in District Dholpur, Rajasthan, India.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
