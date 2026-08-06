"use client";

import { motion } from "framer-motion";

/** Signature visual motif: an animated oscilloscope / PCB-trace line.
 *  Ties the "signal" palette back to the ECE / electronics identity
 *  instead of a generic blob gradient. Used in the hero and as a
 *  section divider. */
export function SignalTrace({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 120"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0 60 L120 60 L150 20 L180 100 L210 60 L340 60 L370 30 L400 90 L430 60 L560 60 L590 15 L620 105 L650 60 L800 60"
        stroke="hsl(var(--trace))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.path
        d="M0 60 L120 60 L150 20 L180 100 L210 60 L340 60 L370 30 L400 90 L430 60 L560 60 L590 15 L620 105 L650 60 L800 60"
        stroke="hsl(var(--trace))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 10"
        opacity="0.5"
        className="animate-trace"
      />
    </svg>
  );
}
