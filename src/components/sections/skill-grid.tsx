"use client";

import { motion } from "framer-motion";
import { skillCategories, skills } from "@/data/skills";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function SkillGrid() {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-6 sm:grid-cols-2"
    >
      {skillCategories.map((category) => {
        const items = skills.filter((s) => s.category === category);
        return (
          <motion.div
            key={category}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface/70 p-6"
          >
            <p className="font-mono text-xs text-accent">{`// ${category.toLowerCase()}`}</p>
            <ul className="mt-4 flex flex-col gap-4">
              {items.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-elevated">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
