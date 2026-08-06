"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/sections/project-card";
import { ProjectModal } from "@/components/sections/project-modal";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function HomeProjects() {
  const [active, setActive] = React.useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2"
      >
        {featured.map((project) => (
          <motion.div key={project.id} variants={fadeUp}>
            <ProjectCard project={project} onOpen={setActive} />
          </motion.div>
        ))}
      </motion.div>
      <ProjectModal project={active} onOpenChange={(open) => !open && setActive(null)} />
    </>
  );
}
