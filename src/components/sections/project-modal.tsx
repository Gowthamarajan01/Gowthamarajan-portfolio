"use client";

import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-xs text-accent">{`// ${title}`}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectModal({ project, onOpenChange }: ProjectModalProps) {
  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent>
        {project && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Badge variant="accent">{project.category}</Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year} · {project.timeline}
                </span>
              </div>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.longDescription}</DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-8 px-8 pb-8">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <DetailList title="features" items={project.features} />
                <DetailList title="challenges" items={project.challenges} />
              </div>
              <DetailList title="learnings" items={project.learnings} />

              <div className="flex flex-wrap gap-3 border-t border-border pt-6">
                {project.githubUrl && (
                  <Button asChild variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                      <Github className="h-4 w-4" />
                      Source code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                      <ExternalLink className="h-4 w-4" />
                      Live demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
