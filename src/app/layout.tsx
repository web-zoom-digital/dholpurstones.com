import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MobileBottomNav from "@/components/MobileBottomNav";
import { SITE_URL, SITE_NAME, CORE_KEYWORDS } from "@/lib/site";
import LeadTracker from "@/components/LeadTracker";
import ScrollEffects from "@/components/ScrollEffects";
import EnquiryModal from "@/components/EnquiryModal";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#123D32",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dholpur Stone & Sandstone Manufacturer | Marble, Farm House Stonework | Dholpurstones.com",
    template: "%s | Dholpurstones.com",
  },
  description:
    "Dholpurstones.com (Estd. 1953) — Dholpur sandstone quarry owner, manufacturer and exporter. Agra Red, Dholpur Beige, Pink & Chocolate sandstone, marble, semi-precious stones, hand-carved sculptures and luxury farm house & garden stonework. Awarded by Govt. of India for 300+ front elevation designs.",
  keywords: CORE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: "Dholpurstones.com", url: SITE_URL }],
  creator: "Dholpurstones.com",
  publisher: "Dholpurstones.com",
  category: "Natural stone manufacturer",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "x-default": "/" },
    types: { "text/plain": "/llms.txt" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Dholpurstones.com (Estd. 1953)",
    title: "Dholpur Stone & Sandstone Manufacturer — Dholpurstones.com",
    description:
      "Mine owner, manufacturer and exporter of Dholpur sandstone, marble and semi-precious stones. Farm house & garden stonework, hand-carved sculptures, 300+ front elevation designs.",
    images: [
      {
        url: "/assets/garg/luxurious_marble_lobby_vignettes.jpg",
        width: 1024,
        height: 576,
        alt: "Dholpurstones.com – natural stone, sandstone elevation and farm house stonework since 1953",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dholpur Stone & Sandstone Manufacturer — Dholpurstones.com",
    description: "Quarry owner, manufacturer & exporter of sandstone, marble and semi-precious stones since 1953.",
    images: ["/assets/garg/luxurious_marble_lobby_vignettes.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "7od_sKJ0gYxX_2uddj6D5RCZtt-OEHYcio17B-4IXkA",
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } : {},
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Dholpur, Rajasthan, India",
    "geo.position": "26.5492;77.2917",
    ICBM: "26.5492, 77.2917",
  },
};

const orgId = `${SITE_URL}/#organization`;

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Dholpurstones.com",
      alternateName: ["Dholpur Stones", "Dholpur Stone", "Dholpurstones", "Dholpurestones"],
      description:
        "Dholpur sandstone quarry owners, manufacturers and exporters since 1953 — sandstone, marble, semi-precious stones, sculptures and farm house stonework.",
      publisher: { "@id": orgId },
      inLanguage: "en-IN",
    },
    {
      "@type": ["Organization", "Corporation"],
      "@id": orgId,
      name: "Dholpurstones.com",
      legalName: "B P Garg & Sons (Garg Corporation Ltd.)",
      alternateName: ["Dholpur Stones", "Dholpur Stone", "Dholpurstones", "Dholpurestones", "Garg Corporation Ltd.", "GCL", "B P Garg & Sons", "Saroj Stone Industries"],
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-512.png`, width: 512, height: 512 },
      image: `${SITE_URL}/assets/garg/luxurious_marble_lobby_vignettes.jpg`,
      foundingDate: "1953",
      description:
        "Established natural-stone business since 1953 with proprietary quarries in Dholpur, Rajasthan. Mining, manufacturing, export and contracting of sandstone, marble and semi-precious stones, plus hand-carved articles and farm house and garden stonework.",
      founder: {
        "@type": "Person",
        name: "Arvind Garg",
        jobTitle: "Managing Director & Mine Owner",
        award: ["Awarded by Govt. of India for sandstone front elevation designs", "Nominated for International Award for Business Excellence"],
      },
      telephone: ["+91-94149-45457", "+91-90573-55232"],
      email: "gargcorporationltd@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "B P Garg & Sons, Near RAC line, Mothiyapura road",
        addressLocality: "Dholpur",
        addressRegion: "Rajasthan",
        postalCode: "328026",
        addressCountry: "IN",
      },
      areaServed: ["IN", "CA", "US", "DE", "NP", "AE", "GB", "AU"],
      knowsAbout: [
        "Dholpur sandstone", "Agra red sandstone", "Dholpur beige sandstone", "Dholpur pink sandstone", "Dholpur chocolate sandstone",
        "Marble", "Semi-precious stones", "Front elevation design", "Farm house stonework", "Garden landscaping stone",
        "Hand-carved stone sculptures", "Natural stone export",
      ],
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+91-94149-45457", contactType: "sales", areaServed: ["IN", "CA", "US", "DE", "NP", "AE", "GB"], availableLanguage: ["English", "Hindi"] },
        { "@type": "ContactPoint", telephone: "+91-90573-55232", contactType: "customer support", areaServed: ["IN", "CA", "US", "DE", "NP", "AE", "GB"], availableLanguage: ["English", "Hindi"] },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Natural stone collections",
        itemListElement: [
          "Dholpur Sandstone (Agra Red, Dholpur Beige, Dholpur Pink, Dholpur Chocolate)",
          "Exclusive Marble (Beige, White, Grey) & Imported Exotic Marble",
          "Farm House & Garden Stonework",
          "Hand-Carved Stone Articles",
          "Semi-Precious Stones",
          "Precious Gem Surfaces",
        ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: n } })),
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Dholpurstones.com — B P Garg & Sons",
      parentOrganization: { "@id": orgId },
      image: `${SITE_URL}/assets/garg/luxurious_marble_lobby_vignettes.jpg`,
      telephone: "+91-94149-45457",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "B P Garg & Sons, Near RAC line, Mothiyapura road",
        addressLocality: "Dholpur",
        addressRegion: "Rajasthan",
        postalCode: "328026",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 26.5492, longitude: 77.2917 },
      hasMap: "https://www.google.com/maps/dir/?api=1&destination=26.5492,77.2917",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`scroll-smooth ${cinzel.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="bg-[#F7F4EB] text-[#1F2A24] antialiased selection:bg-[#C5A15B] selection:text-[#123D32]">
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-59ME7WLZ27"
        />
        <Script
          id="google-analytics-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-59ME7WLZ27');
            `,
          }}
        />

        {children}
        <MobileBottomNav />
        <EnquiryModal />
        <LeadTracker />
        <ScrollEffects />
      </body>
    </html>
  );
}

