import React from "react";
import { LuPhone as Phone, LuMessageSquareText as Enquiry } from "react-icons/lu";
import WhatsAppIcon from "../WhatsAppIcon";
import Button from "./Button";
import EnquiryButton from "./EnquiryButton";
import { waLink, PHONE_SECONDARY } from "@/data/catalog";

interface ContactActionsProps {
  /** Short label saved with the lead, e.g. "Sandstone modal". */
  cta: string;
  /** Product / topic the visitor is looking at. */
  product?: string;
  topic?: string;
  tone?: "dark" | "light";
  size?: "md" | "lg";
  /** "row" wraps in a row from sm; "stack" is always one column. */
  layout?: "row" | "stack";
  className?: string;
}

/** The three ways to reach us — Enquiry, WhatsApp, Call — always in the same look and order. */
export default function ContactActions({
  cta,
  product,
  topic,
  tone = "dark",
  size = "lg",
  layout = "row",
  className = "",
}: ContactActionsProps) {
  const msg = product
    ? `Hello Dholpurstones.com, I would like to enquire about ${product}.`
    : `Hello Dholpurstones.com, I would like to enquire about ${topic || "natural stone"}.`;

  return (
    <div
      className={`flex flex-col gap-3 ${layout === "row" ? "sm:flex-row sm:flex-wrap sm:justify-center" : ""} ${className}`}
    >
      <EnquiryButton variant={tone === "dark" ? "gold" : "forest"} size={size} cta={cta} product={product} className="w-full sm:w-auto">
        <Enquiry className="h-[18px] w-[18px]" />
        Send Enquiry
      </EnquiryButton>
      <Button href={waLink(msg)} variant="whatsapp" size={size} className="w-full sm:w-auto">
        <WhatsAppIcon className="h-[18px] w-[18px] fill-current" size={18} />
        WhatsApp
      </Button>
      <Button
        href="tel:+919057355232"
        variant={tone === "dark" ? "outline-light" : "outline"}
        size={size}
        className="w-full sm:w-auto"
      >
        <Phone className="h-[18px] w-[18px]" />
        Call {PHONE_SECONDARY}
      </Button>
    </div>
  );
}
