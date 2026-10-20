import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0D1311",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dholpurestones.com"),
  title: "Dholpurestones.com (Estd. 1953) | Luxury Farm Houses, Gardens & 300+ Front Elevation Sandstone Designs",
  description:
    "Dholpurestones.com (Estd. 1953) is a premier natural stone conglomerate and quarry owner. Specialized in luxury Farm Houses, Garden Landscaping, and over 300+ designs for front elevation in sandstone (Awarded by Govt. of India & Nominated for International Award for Business Excellence). Suppliers to Parliament House New Delhi, Akshardham, and global landmarks.",
  keywords: [
    "Nominated for International Award for Business Excellence",
    "Sandstone Front Elevation Designs",
    "Farm House Sandstone Elevation",
    "Farm House Stone Landscaping",
    "Luxury Garden Landscaping Sandstone",
    "Sandstone Front Elevation Awarded by Govt of India",
    "300 Front Elevation Designs Sandstone",
    "Dholpurestones.com",
    "Dholpur Stones",
    "Garg Corporation Ltd",
    "GCL",
    "Saroj Stone Industries",
    "Arvind Garg Govt of India Awarded",
    "Dholpur Sandstone Mines",
    "Sarmathura Stone Quarry",
    "Sandstone Mines Owner Rajasthan",
    "Peacock Sandstone Sculpture",
    "Sandstone Carved Lantern",
    "Lion Stone Sculpture",
    "Botticino Marble Supplier",
    "Elmali Beige Marble",
    "Semi Precious Stone Slabs Blue Agate",
    "Parliament House New Delhi Stone Contractor",
    "Akshardham Temple New Delhi Stone Carvings",
    "Adani House Ahmedabad Stone Works",
    "AIIMS Bhopal Stone Contractor",
    "Indian Embassy Germany Stone",
    "Indian Embassy Nepal Stone",
    "ISKCON Temple Stone Supplier Global",
    "Canada Natural Stone Importer",
    "Sikandra Sandstone Processing",
    "Kishangarh Marble Granite Hub",
  ],
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
        url: "/assets/garg/hero_peacock_widescreen_2k.jpg",
        width: 1920,
        height: 1080,
        alt: "Garg Corporation Ltd - Hand Carved Peacock Sandstone Sculpture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garg Corporation Ltd. (Estd. 1953) | Natural Stone Conglomerate",
    description:
      "Quarry Owner, Manufacturer, Exporter & Contractor. Sandstone, Marble, Granite, Semi-Precious Stones & Heritage Sculptures.",
    images: ["/assets/garg/hero_peacock_widescreen_2k.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Sarmathura, Dholpur, Rajasthan, India",
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
      "@type": ["Organization", "Corporation"],
      "@id": "https://dholpurestones.com/#organization",
      "name": "Dholpurestones.com",
      "alternateName": ["Dholpur Stones", "Garg Corporation Ltd.", "GCL", "Saroj Stone Industries"],
      "url": "https://dholpurestones.com",
      "logo": "https://dholpurestones.com/assets/garg/clean_peacock_hero.jpg",
      "foundingDate": "1953",
      "description":
        "Established natural-stone business since 1953 with capabilities across mining, manufacturing, exporting and contracting for natural sandstone, marble, granite, semi-precious stone and custom architectural sculptures.",
      "founder": {
        "@type": "Person",
        "name": "Arvind Garg",
        "jobTitle": "Mines Owner & Director",
        "award": ["Awarded by Govt. of India", "Nominated for International Award for Business Excellence"]
      },
      "telephone": ["+91-94149-45457", "+91-90573-55232"],
      "email": "gargcorporationltd@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "name": "B P Garg & Sons",
        "streetAddress": "Near RAC line, Mothiyapura road",
        "addressLocality": "Sarmathura",
        "addressRegion": "Rajasthan",
        "postalCode": "328026",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://sarmathurastone.com"
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
      "@id": "https://gargcorporationltd.com/#localbusiness",
      "name": "B P Garg & Sons - Garg Corporation Ltd.",
      "image": "https://gargcorporationltd.com/assets/garg/clean_peacock_hero.jpg",
      "telephone": "+91-94149-45457",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "name": "B P Garg & Sons",
        "streetAddress": "Near RAC line, Mothiyapura road",
        "addressLocality": "Sarmathura",
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
      "@id": "https://gargcorporationltd.com/#projects",
      "name": "Major Landmark Projects Executed by Garg Corporation Ltd.",
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
      "@id": "https://gargcorporationltd.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What year was Garg Corporation Ltd. established?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Garg Corporation Ltd. (GCL) has a proud heritage dating back to 1953, with over seven decades of continuous leadership in natural stone quarrying, manufacturing, export, and monumental contracting."
          }
        },
        {
          "@type": "Question",
          "name": "What stone products does Garg Corporation Ltd. specialize in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Garg Corporation Ltd. deals in natural sandstone (including Dholpur red, pink, beige), premium marble (Botticino, Elmali Beige), structural granite (Black Granite), rare translucent semi-precious stone slabs (blue agate, lapis), and bespoke hand-carved sandstone sculptural articles like peacocks, guardian lions, and illuminated stone lanterns."
          }
        },
        {
          "@type": "Question",
          "name": "What major landmark projects has Garg Corporation Ltd. executed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Garg Corporation Ltd. has executed natural stone works for prestigious institutions including Parliament House (New Delhi), Akshardham Temple (New Delhi), Adani House (Ahmedabad), AIIMS (Bhopal), Indian Embassy (Germany), Indian Embassy (Nepal), Nappa Velly (Bangalore), Kashiram Garden (Lucknow), Omega Bearing (Bhopal), and over 50 ISKCON temples globally."
          }
        },
        {
          "@type": "Question",
          "name": "Where are Garg Corporation Ltd's offices and quarries located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The company's primary quarries and works are situated in Sarmathura (Dist. Dholpur, Rajasthan). It maintains processing and manufacturing hubs in Sikandra and Kishangarh (Rajasthan), and has an established international overseas presence in Canada to serve global stone importers."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Garg Corporation Ltd. for inquiries or stone samples?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can connect directly with Mr. Arvind Garg (Awarded by Govt. of India & Nominated for International Award for Business Excellence) via WhatsApp at +91 94149 45457, phone at +91 90573 55232, or email at gargcorporationltd@gmail.com and kamala_stone@yahoo.co.in."
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Cinzel:wght@500;600;700;800;900&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="bg-[#FAF7F2] text-[#141A17] antialiased selection:bg-[#C29B38] selection:text-black">
        {children}
      </body>
    </html>
  );
}
