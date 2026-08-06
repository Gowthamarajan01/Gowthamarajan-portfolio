"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

export function ExperienceTimeline() {
  return (
    <motion.ol
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative flex flex-col gap-10 border-l border-border pl-8"
    >
      {experience.map((item) => (
        <motion.li key={item.id} variants={fadeUp} className="relative">
          <span className="absolute -left-[2.35rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
          </span>

          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-lg font-semibold">{item.role}</h3>
            <Badge variant="outline">{item.type}</Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {item.organization} · {item.period}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </motion.ol>
  );
}
