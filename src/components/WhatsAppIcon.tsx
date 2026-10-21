import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppIcon({
  className = "w-5 h-5",
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return <FaWhatsapp className={className} size={size} aria-hidden="true" />;
}
