import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MobileStickyBar from "@/components/MobileStickyBar";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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
  metadataBase: new URL("https://dholpurestones.com"),
  title: {
    default: "Dholpurestones.com (Estd. 1953) | Luxury Farm Houses, Gardens & 300+ Front Elevation Sandstone Designs",
    template: "%s | Dholpurestones.com",
  },
  description:
    "Dholpurestones.com (Estd. 1953) is a premier natural stone conglomerate and quarry owner. Specialized in luxury Farm Houses, Garden Landscaping, and over 300+ designs for front elevation in sandstone (Awarded by Govt. of India & Nominated for International Award for Business Excellence). Suppliers to Parliament House New Delhi, Akshardham, and global landmarks.",
  authors: [{ name: "Dholpurestones.com", url: "https://dholpurestones.com" }],
  creator: "Dholpurestones.com",
  publisher: "Dholpurestones.com",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://dholpurestones.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dholpurestones.com",
    siteName: "Dholpurestones.com (Estd. 1953)",
    title: "Dholpurestones.com | A Legacy of Natural Stone Since 1953",
    description:
      "Mines Owner • Manufacturer • Exporter • Contractor. Quarrying and crafting natural sandstone, marble, granite and hand-carved heritage articles for iconic national & international landmarks.",
    images: [
      {
        url: "https://dholpurestones.com/assets/garg/luxurious_marble_lobby_vignettes.jpg",
        width: 1024,
        height: 576,
        alt: "Dholpurestones.com – Luxurious Architectural Marble, Sandstone Front Elevation & Farm House Landscaping Since 1953",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dholpurestones.com (Estd. 1953) | Natural Stone Conglomerate",
    description:
      "Quarry Owner, Manufacturer, Exporter & Contractor. Sandstone, Marble, Granite, Semi-Precious Stones & Heritage Sculptures.",
    images: ["https://dholpurestones.com/assets/garg/luxurious_marble_lobby_vignettes.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "7od_sKJ0gYxX_2uddj6D5RCZtt-OEHYcio17B-4IXkA",
  },
  other: {
    "google-site-verification": "7od_sKJ0gYxX_2uddj6D5RCZtt-OEHYcio17B-4IXkA",
    "geo.region": "IN-RJ",
    "geo.placename": "Dholpur, Rajasthan, India",
    "geo.position": "26.5492;77.2917",
    "ICBM": "26.5492, 77.2917",
    "distribution": "Global",
    "rating": "General",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://dholpurestones.com/#website",
      "url": "https://dholpurestones.com",
      "name": "Dholpurestones.com",
      "description": "Authentic Dholpur Sandstone Quarry Owners, Manufacturers, Exporters and Architectural Stonework Specialists Since 1953.",
      "publisher": {
        "@id": "https://dholpurestones.com/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": ["Organization", "Corporation"],
      "@id": "https://dholpurestones.com/#organization",
      "name": "Dholpurestones.com",
      "alternateName": ["Dholpur Stones", "Garg Corporation Ltd.", "GCL", "B P Garg & Sons", "Saroj Stone Industries", "Dholpur Stone Company"],
      "url": "https://dholpurestones.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dholpurestones.com/assets/garg/clean_peacock_hero.jpg",
        "caption": "Dholpurestones Logo"
      },
      "foundingDate": "1953",
      "description":
        "Established natural-stone conglomerate since 1953 with proprietary quarries in Dholpur, Rajasthan. Full capabilities across mining, calibrated tile manufacturing, 8-axis CNC cladding, global container export, and turnkey monumental contracting.",
      "founder": {
        "@type": "Person",
        "name": "Arvind Garg",
        "jobTitle": "Mines Owner & Managing Director",
        "award": [
          "Awarded by Govt. of India for Sandstone Front Elevation Designs",
          "Nominated for International Award for Business Excellence"
        ]
      },
      "telephone": ["+91-94149-45457", "+91-90573-55232"],
      "email": "gargcorporationltd@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "name": "B P Garg & Sons Works",
        "streetAddress": "Near RAC line, Mothiyapura road",
        "addressLocality": "Dholpur",
        "addressRegion": "Rajasthan",
        "postalCode": "328026",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://gargcorporationltd.com",
        "___DHOLPUR_URL_PLACEHOLDER___"
      ],
      "knowsAbout": [
        {
          "@type": "Thing",
          "name": "Dholpur Stone",
          "sameAs": "https://www.wikidata.org/wiki/Q3026857"
        },
        {
          "@type": "Thing",
          "name": "Sandstone",
          "sameAs": "https://www.wikidata.org/wiki/Q13085"
        },
        {
          "@type": "Place",
          "name": "Parliament of India",
          "sameAs": "https://www.wikidata.org/wiki/Q675716"
        },
        {
          "@type": "Place",
          "name": "Swaminarayan Akshardham (Delhi)",
          "sameAs": "https://www.wikidata.org/wiki/Q418448"
        },
        {
          "@type": "Place",
          "name": "Dholpur",
          "sameAs": "https://www.wikidata.org/wiki/Q2726359"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-94149-45457",
          "contactType": "sales",
          "contactOption": "HearingImpairedSupported",
          "areaServed": ["IN", "CA", "US", "DE", "NP", "AE", "GB"],
          "availableLanguage": ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-90573-55232",
          "contactType": "customer support",
          "areaServed": ["IN", "CA", "US", "DE", "NP", "AE", "GB"],
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://dholpurestones.com/#localbusiness",
      "name": "Dholpurestones.com - B P Garg & Sons",
      "image": "https://dholpurestones.com/assets/garg/clean_peacock_hero.jpg",
      "telephone": "+91-94149-45457",
      "priceRange": "$$$$",
      "currenciesAccepted": "INR, USD, EUR, CAD, AED",
      "paymentAccepted": "Cash, Credit Card, Wire Transfer, Letter of Credit",
      "url": "https://dholpurestones.com",
      "address": {
        "@type": "PostalAddress",
        "name": "B P Garg & Sons",
        "streetAddress": "Near RAC line, Mothiyapura road",
        "addressLocality": "Dholpur",
        "addressRegion": "Rajasthan",
        "postalCode": "328026",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.5492,
        "longitude": 77.2917
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://dholpurestones.com/#projects",
      "name": "Major Landmark Projects Executed by Dholpurestones.com",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Parliament House, New Delhi - National Landmark Stone Contractor"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Akshardham Temple, New Delhi - Spiritual Stone Carvings & Masonry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Adani House, Ahmedabad - Corporate Headquarters Natural Stone"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "AIIMS, Bhopal - Premier Institutional Medical Complex Stone"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Indian Embassy, Berlin, Germany - Diplomatic Mission Stone Supply"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Indian Embassy, Kathmandu, Nepal - Diplomatic Mission Stone Works"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "ISKCON Temples (50+ Locations Globally) - Spiritual Temple Stone Sourcing"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Kashiram Garden, Lucknow - Heritage Monumental Public Garden Stone"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Nappa Velly, Bangalore - Prestige Architectural Residential Estate"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Omega Bearing, Bhopal - Monolithic Industrial Stone Facades"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://dholpurestones.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What year was Dholpurestones (B P Garg & Sons) established?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dholpurestones.com (B P Garg & Sons / Garg Corporation Ltd.) has a proud heritage dating back to 1953, with over seven decades of continuous leadership in natural stone quarrying, manufacturing, export, and monumental architectural contracting."
          }
        },
        {
          "@type": "Question",
          "name": "What stone products does Dholpurestones specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dholpurestones deals in authentic natural sandstone (Dholpur Red, Pink, Beige, Chocolate), calibrated floor tiles, CNC wall elevation cladding, premium marble (Botticino, Elmali Beige), structural granite, translucent semi-precious stone slabs, and bespoke hand-carved sandstone sculptures like peacocks, stone lanterns, and temple pillars."
          }
        },
        {
          "@type": "Question",
          "name": "What major landmark projects has Dholpurestones executed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dholpurestones has executed natural stone supplies and architectural craftsmanship for Parliament House (New Delhi), Akshardham Temple (New Delhi), Adani House (Ahmedabad), AIIMS (Bhopal), Indian Embassy (Berlin, Germany), Indian Embassy (Kathmandu, Nepal), Nappa Velly (Bangalore), Kashiram Garden (Lucknow), Omega Bearing (Bhopal), and over 50 ISKCON temples globally."
          }
        },
        {
          "@type": "Question",
          "name": "Where are Dholpurestones quarries and production facilities located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The company's primary proprietary quarries and works are situated in Dholpur (Rajasthan). It maintains processing and artisanal carving ateliers in Sikandra and Kishangarh (Rajasthan), and has an established international export presence in Canada."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Dholpurestones for architectural inquiries or sample boxes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can connect directly with Managing Director Mr. Arvind Garg (Awarded by Govt. of India) via WhatsApp at +91 94149 45457, phone at +91 90573 55232, or email at gargcorporationltd@gmail.com."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${cinzel.variable} ${plusJakartaSans.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="7od_sKJ0gYxX_2uddj6D5RCZtt-OEHYcio17B-4IXkA"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
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
        <MobileStickyBar />
      </body>
    </html>
  );
}

