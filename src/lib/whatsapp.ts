import { waLink } from "@/data/catalog";

export interface EnquiryFields {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  interest?: string;
  product?: string;
  message?: string;
  page?: string;
}

/** Builds the ready-to-send WhatsApp message that carries a complete enquiry. */
export function enquiryWhatsAppLink(f: EnquiryFields) {
  const lines: (string | false | undefined)[] = [
    "Hello Dholpurstones.com, I have sent an enquiry from your website.",
    "",
    f.name ? `Name: ${f.name}` : undefined,
    f.phone ? `Phone: ${f.phone}` : undefined,
    f.email ? `Email: ${f.email}` : undefined,
    f.location ? `City / Country: ${f.location}` : undefined,
    f.interest ? `Interested in: ${f.interest}` : undefined,
    f.product ? `Product: ${f.product}` : undefined,
    f.message ? `Details: ${f.message}` : undefined,
    "",
    f.page ? `[Page: ${f.page}]` : undefined,
  ];
  return waLink(lines.filter((l): l is string => typeof l === "string").join("\n"));
}
