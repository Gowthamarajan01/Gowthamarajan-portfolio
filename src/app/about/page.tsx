import type { Metadata } from "next";
import Image from "next/image";
import { Compass, HeartHandshake, Sparkles, Target } from "lucide-react";
import { siteConfig } from "@/data/config";
import { SectionTitle } from "@/components/shared/section-title";
import { Reveal } from "@/components/shared/reveal";
import { EducationCard } from "@/components/sections/education-card";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { SkillGrid } from "@/components/sections/skill-grid";
import { CertificationCard } from "@/components/sections/certification-card";

export const metadata: Metadata = {
  title: "About",
  description: `The story, education, and values behind ${siteConfig.name}'s work.`,
};

const values = [
  {
    icon: Target,
    title: "Build for the real world",
    description:
      "Every project starts from a concrete problem — a credential that needs verifying, a seed that needs sorting — not a technology looking for a use case.",
  },
  {
    icon: Compass,
    title: "Cross the hardware–software line",
    description:
      "An ECE background means comfort on both sides of the wire: firmware and sensors as much as APIs and interfaces.",
  },
  {
    icon: Sparkles,
    title: "Ship, then refine",
    description:
      "Working prototypes beat polished plans. Iterate in public, take feedback seriously, and keep the scope honest.",
  },
  {
    icon: HeartHandshake,
    title: "Document as you go",
    description:
      "Technical writing isn't an afterthought — clear documentation is part of finishing the work, not separate from it.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-32 pt-40 sm:pt-48">
      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <Reveal>
            <span className="font-mono text-xs text-accent">{"// about"}</span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              A little about how I got here.
            </h1>
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I&apos;m {siteConfig.name}, a final-year Electronics and
                Communication Engineering student who ended up spending as
                much time in a code editor as in the embedded systems lab.
                {" "}{siteConfig.tagline}
              </p>
              <p>
                My work sits at the intersection of embedded electronics, AI,
                blockchain, and modern web development — building systems
                where the hardware and the software have to trust each other.
                That shows up in projects like a credential-verification
                platform backed by cryptographic hashing, and a seed
                inspection system that pairs computer vision with a
                servo-driven separator.
              </p>
              <p>
                Outside of coursework, I&apos;ve coordinated technical events,
                interned on web development and technical writing, and
                competed in hackathons — CICADA&apos;25 among them. I&apos;m
                currently preparing for campus placements and looking for
                opportunities where I can keep building software that
                actually touches the physical world.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-xs rounded-[2rem] p-[2px]" style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
            }}>
              <div className="overflow-hidden rounded-[calc(2rem-2px)] glass-elevated">
                <Image
                  src="/images/profile.jpg"
                  alt={siteConfig.name}
                  width={420}
                  height={500}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionTitle eyebrow="values" title="How I approach the work" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <Reveal key={v.title}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface/70 p-6">
                <div className="w-fit rounded-xl bg-primary/12 p-3 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionTitle eyebrow="education" title="Education" />
        <div className="mt-12">
          <EducationCard />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionTitle eyebrow="experience" title="Journey so far" />
        <div className="mt-12">
          <ExperienceTimeline />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionTitle eyebrow="skills" title="Technical skills" />
        <div className="mt-12">
          <SkillGrid />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <SectionTitle eyebrow="credentials" title="Certifications & languages" />
        <div className="mt-12">
          <CertificationCard />
        </div>
      </section>
    </div>
  );
}
