"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface RevealProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}

/** Scroll-reveal wrapper: animates children into view once, respecting
 *  prefers-reduced-motion via the global CSS override. */
export function Reveal({ children, variants = fadeUp, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
