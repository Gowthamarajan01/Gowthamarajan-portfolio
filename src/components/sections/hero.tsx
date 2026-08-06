"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { FloatingShapes } from "@/components/shared/floating-shapes";
import { SignalTrace } from "@/components/shared/signal-trace";
import { fadeUp, staggerContainer } from "@/lib/animations";

const TYPE_SPEED = 55;
const DELETE_SPEED = 32;
const HOLD_MS = 1400;

function useTypewriter(words: readonly string[]) {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && text === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- typewriter state machine transition, intentional
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? DELETE_SPEED : TYPE_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(siteConfig.titles);

  return (
    <section className="relative overflow-hidden pb-28 pt-40 sm:pt-48">
      <FloatingShapes />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Open to opportunities
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{siteConfig.name.split(" ")[0]}</span>
            <span className="text-gradient">.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 h-8 font-mono text-lg text-accent sm:text-xl"
            aria-live="polite"
          >
            {typed}
            <span className="animate-pulse">_</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button asChild size="lg">
                <Link href="/projects">
                  View my work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="glass" size="lg">
                <a href="/resume/Gowtham_Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
            <a
              href="https://github.com/Gowthamarajan01"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="rounded-full glass p-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/gowthamarajan-p-4a3a47320/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="rounded-full glass p-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float">
            <div className="relative rounded-[2rem] p-[2px]" style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
            }}>
              <div className="overflow-hidden rounded-[calc(2rem-2px)] glass-elevated">
                <Image
                  src="/images/profile.jpg"
                  alt={siteConfig.name}
                  width={480}
                  height={560}
                  priority
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 w-64 -translate-x-1/2 opacity-70">
            <SignalTrace className="h-10 w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
