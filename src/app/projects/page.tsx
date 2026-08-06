import type { Metadata } from "next";
import { siteConfig } from "@/data/config";
import { SectionTitle } from "@/components/shared/section-title";
import { ProjectsExplorer } from "@/components/sections/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description: `A gallery of ${siteConfig.name}'s full-stack, blockchain, and embedded-systems projects.`,
};

export default function ProjectsPage() {
  return (
    <div className="pb-32 pt-40 sm:pt-48">
      <section className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="projects"
          title="Things I've built"
          description="From a blockchain credentialing platform to an embedded vision system — search or filter to explore each build in detail."
        />
        <div className="mt-14">
          <ProjectsExplorer />
        </div>
      </section>
    </div>
  );
}
