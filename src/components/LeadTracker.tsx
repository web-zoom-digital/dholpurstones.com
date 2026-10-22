"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution, trackEvent } from "@/lib/leads";

/**
 * Site-wide lead tracking:
 *  - stores first-touch attribution (UTM / referrer / landing page)
 *  - tags every WhatsApp message with the page it was sent from, so the
 *    business owner can see exactly where each chat came from
 *  - fires GA4 events for WhatsApp, phone and email clicks
 */
export default function LeadTracker() {
  const pathname = usePathname();

  useEffect(() => {
    captureAttribution();
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const label = (a.getAttribute("aria-label") || a.textContent || "").trim().slice(0, 60);
      const page = window.location.pathname;

      if (href.startsWith("https://wa.me/")) {
        try {
          const url = new URL(href);
          const text = url.searchParams.get("text") || "Hello Dholpurstones.com";
          if (!text.includes("[Page:")) {
            url.searchParams.set("text", `${text}\n\n[Page: ${page}]`);
            a.setAttribute("href", url.toString());
          }
        } catch {
          /* leave link untouched */
        }
        trackEvent("whatsapp_click", { page_path: page, link_text: label });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { page_path: page, link_text: label });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { page_path: page, link_text: label });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return null;
}
