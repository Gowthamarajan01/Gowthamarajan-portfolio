"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { cardHover } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(project)}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      animate="rest"
      variants={cardHover}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface/70 p-6 text-left card-shadow transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex items-start justify-between gap-4">
        <Badge variant="accent">{project.category}</Badge>
        <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold leading-snug">
        {project.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
        View case study
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      {project.githubUrl && (
        <span className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100">
          <Github className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        </span>
      )}
    </motion.button>
  );
}
