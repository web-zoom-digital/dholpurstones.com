import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Collections from "@/components/home/Collections";
import SandstoneSection from "@/components/home/SandstoneSection";
import MarbleSection from "@/components/home/MarbleSection";
import GardenSection from "@/components/home/GardenSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import SemiPreciousSection from "@/components/home/SemiPreciousSection";
import ExclusiveSection from "@/components/home/ExclusiveSection";
import WhyUs from "@/components/home/WhyUs";
import ProjectsSection from "@/components/home/ProjectsSection";
import HomeFAQ from "@/components/home/HomeFAQ";
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
      <MarbleSection />
      <GardenSection />
      <ArticlesSection />
      <SemiPreciousSection />
      <ExclusiveSection />
      <WhyUs />
      <ProjectsSection />
      <HomeFAQ />
      <HomeContact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
