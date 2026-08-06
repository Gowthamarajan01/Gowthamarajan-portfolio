"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

/** Marquee of tech pills — an infinite CSS-driven loop, duplicated once
 *  so the animation seams invisibly. */
export function TechStack() {
  const names = skills.map((s) => s.name);
  const loop = [...names, ...names];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative mx-auto mt-16 max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <motion.div
        variants={staggerContainer(0.02)}
        className="flex w-max animate-marquee gap-3 px-3"
      >
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap rounded-full glass px-4 py-2 font-mono text-sm text-muted-foreground"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
