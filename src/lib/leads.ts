/** Client-side helpers for lead attribution and analytics events. */

export interface Attribution {
  landing: string;
  referrer: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  firstSeen: string;
}

const KEY = "ds_attribution";

type GtagFn = (...args: unknown[]) => void;

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

/** Stores first-touch attribution once per browser so we know where leads come from. */
export function captureAttribution() {
  try {
    if (localStorage.getItem(KEY)) return;
    const q = new URLSearchParams(window.location.search);
    const a: Attribution = {
      landing: window.location.pathname + window.location.search,
      referrer: document.referrer || "direct",
      firstSeen: new Date().toISOString(),
    };
    (["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const).forEach((k) => {
      const v = q.get(k);
      if (v) a[k] = v.slice(0, 120);
    });
    localStorage.setItem(KEY, JSON.stringify(a));
  } catch {
    /* storage can be blocked — attribution is best-effort */
  }
}

export function getAttribution(): Attribution | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

export interface EnquiryDetail {
  product?: string;
  interest?: string;
  cta?: string;
}

export const OPEN_ENQUIRY_EVENT = "ds:open-enquiry";

export function openEnquiry(detail: EnquiryDetail = {}) {
  window.dispatchEvent(new CustomEvent<EnquiryDetail>(OPEN_ENQUIRY_EVENT, { detail }));
}
