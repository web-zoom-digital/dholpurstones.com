import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Collections from "@/components/home/Collections";
import SandstoneSection from "@/components/home/SandstoneSection";
import GardenSection from "@/components/home/GardenSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import SemiPreciousSection from "@/components/home/SemiPreciousSection";
import ExclusiveSection from "@/components/home/ExclusiveSection";
import WhyUs from "@/components/home/WhyUs";
import ProjectsSection from "@/components/home/ProjectsSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { generalFaqs } from "@/data/faqs";
import { faqLd } from "@/lib/schema";
import HomeContact from "@/components/home/HomeContact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-ink selection:bg-gold selection:text-forest">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Collections />
      <SandstoneSection />
      <GardenSection />
      <ArticlesSection />
      <SemiPreciousSection />
      <ExclusiveSection />
      <WhyUs />
      <ProjectsSection />
      <FaqSection faqs={generalFaqs} />
      <JsonLd data={faqLd(generalFaqs)} />
      <HomeContact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
