import type { Metadata } from "next";
import { siteConfig } from "@/data/config";
import { SectionTitle } from "@/components/shared/section-title";
import { ResumeViewer } from "@/components/sections/resume-viewer";

export const metadata: Metadata = {
  title: "Resume",
  description: `Download or preview ${siteConfig.name}'s resume.`,
};

export default function ResumePage() {
  return (
    <div className="pb-32 pt-40 sm:pt-48 print:pt-0">
      <section className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="resume"
          title="My resume"
          description="Preview it below, or download a copy to keep."
        />
        <div className="mt-12">
          <ResumeViewer />
        </div>
      </section>
    </div>
  );
}
