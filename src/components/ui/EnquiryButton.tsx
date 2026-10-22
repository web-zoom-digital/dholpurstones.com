"use client";

import React from "react";
import { motion } from "framer-motion";
import { buttonClasses, type Variant } from "./Button";
import { openEnquiry } from "@/lib/leads";

interface EnquiryButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  /** Product or collection the visitor is enquiring about. */
  product?: string;
  interest?: string;
  /** Short label stored with the lead, e.g. "Marble hero". */
  cta: string;
}

/** Looks like a Button, but opens the global quote dialog with context. */
export default function EnquiryButton({
  children,
  variant = "gold",
  size = "md",
  className = "",
  product,
  interest,
  cta,
}: EnquiryButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={() => openEnquiry({ product, interest, cta })}
      whileTap={{ scale: 0.96 }}
      whileHover={{ y: -2 }}
      className={buttonClasses(variant, size, className)}
    >
      {children}
    </motion.button>
  );
}
