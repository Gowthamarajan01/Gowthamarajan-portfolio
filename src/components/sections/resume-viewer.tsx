"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "@/lib/animations";

const RESUME_PATH = "/resume/Gowtham_Resume.pdf";

export function ResumeViewer() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-wrap items-center gap-3 rounded-2xl glass p-3 sm:sticky sm:top-24 sm:z-10">
        <Button asChild size="sm">
          <a href={RESUME_PATH} download>
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href={RESUME_PATH} target="_blank" rel="noreferrer noopener">
            <ExternalLink className="h-4 w-4" />
            Open in new tab
          </a>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => window.print()}>
          <Printer className="h-4 w-4" />
          Print
        </Button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-surface/70 card-shadow print:hidden">
        <object
          data={RESUME_PATH}
          type="application/pdf"
          className="h-[80vh] w-full"
          aria-label="Gowthamarajan P — resume preview"
        >
          <div className="flex h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="text-sm text-muted-foreground">
              Your browser can&apos;t preview PDFs inline. Use the buttons above
              to download or open the resume instead.
            </p>
          </div>
        </object>
      </div>
    </motion.div>
  );
}
