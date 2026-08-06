import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/config";
import { socials } from "@/data/socials";
import { SectionTitle } from "@/components/shared/section-title";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} about internships, collaborations, or placement opportunities.`,
};

export default function ContactPage() {
  return (
    <div className="pb-32 pt-40 sm:pt-48">
      <section className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="contact"
          title="Let's talk"
          description="Reach out about internships, collaborations, or campus placement opportunities — I try to reply within a couple of days."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="flex flex-col gap-6">
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface/70 p-5">
              <div className="rounded-xl bg-primary/12 p-2.5 text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface/70 p-5">
              <div className="rounded-xl bg-primary/12 p-2.5 text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="rounded-full glass p-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
