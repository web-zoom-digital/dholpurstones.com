import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BurgundyBand from "@/components/BurgundyBand";
import AboutUs from "@/components/AboutUs";
import OurStrength from "@/components/OurStrength";
import WhyChooseUs from "@/components/WhyChooseUs";
import InternationalExcellence from "@/components/InternationalExcellence";
import SandstoneArticles from "@/components/SandstoneArticles";
import OurProducts from "@/components/OurProducts";
import FarmHouseGardenSpecialist from "@/components/FarmHouseGardenSpecialist";
import StoneCollection from "@/components/StoneCollection";
import SemiPreciousPreview from "@/components/SemiPreciousPreview";
import WhiteSeriesSection from "@/components/WhiteSeriesSection";
import PreciousGemHomeSection from "@/components/PreciousGemHomeSection";
import Applications from "@/components/Applications";
import OurSignatureProjects from "@/components/OurSignatureProjects";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main style={{ overflow: "visible" }} className="min-h-screen bg-[#F7F4EB] text-[#1F2A24] selection:bg-[#C5A15B] selection:text-[#123D32]">
      {/* 1. Brand Navbar with GCL Logo & Top Bar */}
      <Navbar />

      {/* 2. Hero Section (Page 1 of PDF - A Legacy of Natural Stone Since 1953) */}
      <Hero />

      {/* 2B. Front Elevation (300+ Designs) & Farm House Excellence Award Banner */}
      <BurgundyBand />

      {/* 3. About Us (Page 2 of PDF - 1953 Legacy, Lion & Lantern Articles) */}
      <AboutUs />

      {/* 4. Our Strength (Page 3 of PDF - 6 Strengths & Offices in Dholpur, Sikandra, Kishangarh, Canada) */}
      <OurStrength />

      {/* 4B. Why Choose Authentic Sandstone - Direct Quarry Mining Advantage */}
      <WhyChooseUs />

      {/* 4C. Nominated for International Award for Business Excellence & Global Footprint */}
      <InternationalExcellence />

      {/* 5. Sandstone Articles (Page 4 of PDF - Peacock Sculpture, Stone Lantern, Lion Sculpture) */}
      {/* <SandstoneArticles /> */}

      {/* 6. Our Products (Centered Heading, 3 Categories, 4 Images) */}
      <OurProducts isHome={true} />

      {/* 6B. Dedicated Luxury Farm House & Designer Garden Landscaping (4 Preview Cards + View More Button) */}
      <FarmHouseGardenSpecialist isHomePreview={true} />

      {/* 6C. White Series – Dholpur Color Section (3 Images + Centered Read More) */}
      <WhiteSeriesSection />

      {/* 7. Natural Stone Collection (Page 5 of PDF - Botticino, Black Granite, Semi-Precious, Elmali Beige) */}
      <StoneCollection />

      {/* 7B. Semi-Precious Gemstone Collection Preview (Agate, Lapis, Tiger's Eye, Jasper) */}
      <SemiPreciousPreview />

      {/* 7C. Precious Gem Surface Section (6 Gems, Hover View Popup, View All) */}
      <PreciousGemHomeSection />

      {/* 8. Applications (Page 6 of PDF - 6 Typologies & 'From Nature To Iconic Landmarks' Banner) */}
      <Applications />

      {/* 9. Our Signature Projects (Featured Projects: Demonstrating Our Expertise) */}
      <OurSignatureProjects />

      {/* 10. Verified FAQs & Knowledge (AEO Optimized) */}
      <FAQSection />

      {/* 10. Contact & Credentials (Page 8 of PDF - Visiting Cards, Saroj Stone Industries, Arvind Garg, WhatsApp QR) */}
      <ContactSection />

      {/* 10. Heritage Footer */}
      <Footer />

      {/* 11. Floating Direct WhatsApp Contact (+91 94149 45457) */}
      <FloatingWhatsApp />
    </main>
  );
}
