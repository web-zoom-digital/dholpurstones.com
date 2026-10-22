import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hand-Carved Sandstone Sculptures – Peacocks, Lions, Lanterns, Fountains",
  description:
    "Exquisite hand-carved natural sandstone peacock sculptures, regal stone lanterns, lions, fountains, and temple pillars chiseled by hereditary Shilpa Shastra master artisans in Sikandra & Dholpur.",
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "Hand-Carved Sandstone Sculptures & Heritage Articles | Dholpurestones",
    description:
      "Handcrafted master stone carvings from authentic Rajasthan quarries. Monolithic peacock sculptures, garden lanterns, and ornamental temple art.",
    url: "/articles",
    siteName: "Dholpurestones.com",
    images: [
      {
        url: "/stone-articles/temple_sanctum_pillars.jpg",
        width: 1200,
        height: 630,
        alt: "Hand-Carved Sandstone Sculptures & Artisans at Sikandra Ateliers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hand-Carved Sandstone Sculptures | Dholpurestones",
    description: "Monolithic peacocks, regal lanterns, and sacred temple carvings from Rajasthan quarries.",
    images: ["/stone-articles/temple_sanctum_pillars.jpg"],
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
