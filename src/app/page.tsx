import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { ContributionGraph } from "@/components/sections/contribution-graph";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { EducationCard } from "@/components/sections/education-card";
import { SkillGrid } from "@/components/sections/skill-grid";
import { HomeProjects } from "@/components/sections/home-projects";
import { SectionTitle } from "@/components/shared/section-title";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />

      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionTitle
          eyebrow="featured_work"
          title="Selected projects"
          description="A couple of builds that span the stack — from a blockchain-backed credentialing platform to a computer-vision system running on embedded hardware."
        />
        <div className="mt-12">
          <HomeProjects />
        </div>
        <Reveal className="mt-10">
          <Button asChild variant="outline">
            <Link href="/projects">
              See all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionTitle eyebrow="activity" title="Building in the open" />
        <div className="mt-12">
          <ContributionGraph />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionTitle eyebrow="experience" title="Where I've worked" />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ExperienceTimeline />
          <div className="flex flex-col gap-6">
            <p className="font-mono text-xs text-accent">{"// education"}</p>
            <EducationCard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionTitle eyebrow="skills" title="What I work with" />
        <div className="mt-12">
          <SkillGrid />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-32 pt-8 text-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-elevated p-12">
            <div className="mesh-gradient absolute inset-0 -z-10" />
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open to internships, collaborations, and campus placement
              opportunities in full-stack, AI, and embedded systems.
            </p>
            <Magnetic className="mt-8 inline-block">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  );
}
