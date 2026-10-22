import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  LuChevronRight as ChevronRight,
  LuHouse as HomeIcon,
  LuShieldCheck as ShieldCheck
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Official Privacy Policy of Dholpurstones.com. Explains how architectural inquiries, quotations, client contact data, and cookies are managed under DPDP Act & international standards.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Dholpurstones.com",
    description:
      "Privacy policy and data protection governance for Dholpurstones.com (B P Garg & Sons).",
    url: "/privacy-policy",
    siteName: "Dholpurstones",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Dholpurstones.com",
    description: "Official Privacy Policy of Dholpurstones.com (B P Garg & Sons).",
  },
};

export default function PrivacyPolicyPage() {
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
            <span className="text-[#C5A15B] font-semibold">Privacy Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A15B]/15 border border-[#C5A15B]/30 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A15B]" />
            <span className="font-heading text-[11px] sm:text-xs font-bold text-[#C5A15B] tracking-[0.2em] uppercase">
              DATA PRIVACY &amp; COMPLIANCE
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white">
            Privacy Policy
          </h1>
          <p className="font-body text-xs sm:text-sm text-white/70 max-w-2xl mt-3 leading-relaxed">
            Effective Date: October 21, 2026. This policy governs how Dholpurstones.com collects, processes, and protects personal data provided by visitors, architects, project contractors, and international stone importers.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 text-sm sm:text-base leading-relaxed text-[#1F2A24]/85">
        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            1. Corporate Identification &amp; Data Controller
          </h2>
          <p>
            This website (<span className="font-semibold">Dholpurstones.com</span>) is operated by <strong>B P Garg &amp; Sons</strong> and <strong>Garg Corporation Ltd.</strong> (Estd. 1953), having registered manufacturing and mining operations near RAC line, Mothiyapura road, Dholpur 328026, Rajasthan, India. For inquiries regarding data practices, you may reach our administrative desk at <a href="mailto:gargcorporationltd@gmail.com" className="text-[#123D32] underline font-semibold">gargcorporationltd@gmail.com</a>.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            2. Personal Information Collected
          </h2>
          <p className="mb-3">
            We collect personal information voluntarily submitted when you request a quarry quotation, architectural sample box, or tender collaboration:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
            <li><strong>Contact Coordinates:</strong> Full name, telephone/mobile number, WhatsApp contact number, and corporate email address.</li>
            <li><strong>Project Specifications:</strong> Architectural Bill of Quantities (BOQ), required stone dimensions, finishes, delivery locations, and expected timelines.</li>
            <li><strong>Technical Analytics:</strong> Anonymized browser user agents, referring URLs, and device types utilized to improve site performance and Core Web Vitals.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            3. Purpose of Data Processing
          </h2>
          <p className="mb-3">
            Submitted information is strictly utilized to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base">
            <li>Generate custom architectural quotations, freight estimates, and stone calibration schedules.</li>
            <li>Facilitate direct technical consultations with Managing Director Mr. Arvind Garg or designated engineering masons.</li>
            <li>Dispatch physical stone sample boxes via verified logistics carriers.</li>
            <li>Maintain regulatory records under Indian export-import (EXIM) laws and tax compliance standards.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            4. Non-Disclosure &amp; Information Security
          </h2>
          <p>
            We enforce strict confidentiality. We do not sell, rent, monetize, or trade your contact or project data to third-party marketing brokers. Data is accessible solely to authorized personnel responsible for fulfilling your inquiry. We employ SSL/TLS encryption across all communications and adhere to India&apos;s Digital Personal Data Protection (DPDP) Act.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            5. Cookies and Web Analytics
          </h2>
          <p>
            Dholpurstones.com utilizes minimal necessary cookies to preserve UI preferences and gather aggregated, non-personally identifiable metrics. You may choose to disable cookies in your browser settings without impacting your ability to browse our stone collections.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#123D32] mb-3">
            6. Direct Communications &amp; Rights
          </h2>
          <p>
            You retain the right to request deletion, correction, or review of any personal contact data stored in our communication archives by writing directly to our official works address or email.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
