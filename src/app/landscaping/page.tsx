import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to Luxury Farm House & Gardens | Dholpurestones",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://dholpurestones.com/farmhouse-gardens",
  },
};

export default function LandscapingRedirectPage() {
  redirect("/farmhouse-gardens");
}
