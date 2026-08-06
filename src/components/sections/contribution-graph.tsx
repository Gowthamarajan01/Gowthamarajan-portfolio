"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const LEVEL_CLASSES: Record<number, string> = {
  0: "bg-surface-elevated",
  1: "bg-primary/25",
  2: "bg-primary/50",
  3: "bg-primary/75",
  4: "bg-primary",
};

/** Deterministic fallback grid so the graph still looks intentional
 *  if the public contributions API is unreachable — seeded from the
 *  configured username rather than pure randomness. */
function fallbackWeeks(username: string): ContributionDay[][] {
  let seed = 0;
  for (const ch of username) seed += ch.charCodeAt(0);

  const days: ContributionDay[] = [];
  const today = new Date();
  for (let i = 363; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    seed = (seed * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    const level = (Math.floor(rand * 5) as 0 | 1 | 2 | 3 | 4);
    days.push({
      date: date.toISOString().slice(0, 10),
      count: level * 2,
      level,
    });
  }

  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

export function ContributionGraph({ username = siteConfig.github }: { username?: string }) {
  const [weeks, setWeeks] = React.useState<ContributionDay[][]>(() => fallbackWeeks(username));
  const [source, setSource] = React.useState<"live" | "fallback">("fallback");

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        const flat: ContributionDay[] = data.contributions ?? [];
        if (!flat.length) throw new Error("Empty response");

        const grouped: ContributionDay[][] = [];
        for (let i = 0; i < flat.length; i += 7) {
          grouped.push(flat.slice(i, i + 7) as ContributionDay[]);
        }
        if (!cancelled) {
          setWeeks(grouped);
          setSource("live");
        }
      } catch {
        // Keep the deterministic fallback grid.
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="rounded-2xl border border-border bg-surface/70 p-6"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs text-accent">{"// github_contributions"}</p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer noopener"
          className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          @{username}
        </a>
      </div>

      <div className="mt-5 flex gap-1 overflow-x-auto pb-2">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day) => (
              <div
                key={day.date}
                title={`${day.count} contributions on ${day.date}`}
                className={cn("h-3 w-3 rounded-[3px]", LEVEL_CLASSES[day.level])}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {source === "live" ? "Live from GitHub" : "Illustrative pattern — live data unavailable"}
        </p>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground">Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div key={l} className={cn("h-3 w-3 rounded-[3px]", LEVEL_CLASSES[l])} />
          ))}
          <span className="text-xs text-muted-foreground">More</span>
        </div>
      </div>
    </motion.div>
  );
}
