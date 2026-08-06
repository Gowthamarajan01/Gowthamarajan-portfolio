"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications, languages } from "@/data/certifications";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function CertificationCard() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col gap-3"
      >
        <p className="font-mono text-xs text-accent">{"// certifications"}</p>
        {certifications.map((c) => (
          <motion.div
            key={c.id}
            variants={fadeUp}
            className="flex items-center gap-3 rounded-2xl border border-border bg-surface/70 p-4"
          >
            <div className="rounded-lg bg-accent/12 p-2 text-accent">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">{c.title}</p>
              <p className="text-xs text-muted-foreground">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col gap-3"
      >
        <p className="font-mono text-xs text-accent">{"// languages"}</p>
        <div className="flex flex-wrap gap-2 rounded-2xl border border-border bg-surface/70 p-4">
          {languages.map((lang) => (
            <span
              key={lang}
              className="rounded-full bg-surface-elevated px-3 py-1.5 text-sm text-muted-foreground"
            >
              {lang}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
