"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function EducationCard() {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex flex-col gap-4"
    >
      {education.map((edu) => (
        <motion.div
          key={edu.id}
          variants={fadeUp}
          className="flex items-start gap-4 rounded-2xl border border-border bg-surface/70 p-6"
        >
          <div className="rounded-xl bg-primary/12 p-3 text-primary">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">{edu.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
            <p className="mt-1 font-mono text-xs text-accent">
              {edu.period} · {edu.detail}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
