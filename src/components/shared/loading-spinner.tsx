"use client";

import { motion } from "framer-motion";

/** Oscilloscope-styled loading indicator used for route loading.tsx
 *  files, echoing the "signal" motif rather than a generic spinner. */
export function LoadingSpinner({ label = "Loading" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[50vh] flex-col items-center justify-center gap-4"
    >
      <svg width="72" height="36" viewBox="0 0 72 36" aria-hidden="true">
        <motion.path
          d="M0 18 L18 18 L23 4 L30 32 L36 18 L72 18"
          fill="none"
          stroke="hsl(var(--trace))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <span className="font-mono text-xs text-muted-foreground">{label}…</span>
    </div>
  );
}
