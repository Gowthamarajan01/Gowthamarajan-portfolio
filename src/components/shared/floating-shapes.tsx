"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 120, top: "8%", left: "6%", delay: 0, duration: 7 },
  { size: 80, top: "62%", left: "88%", delay: 1.2, duration: 8 },
  { size: 60, top: "78%", left: "12%", delay: 0.6, duration: 6.5 },
];

/** Ambient floating orbs used behind the hero for a spatial, layered feel. */
export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            background:
              i % 2 === 0
                ? "hsl(var(--primary)/0.22)"
                : "hsl(var(--accent)/0.2)",
          }}
          animate={{ y: [0, -22, 0] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
