import Link from "next/link";
import { navLinks, siteConfig } from "@/data/config";
import { socials } from "@/data/socials";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="font-display text-lg font-semibold">
            {siteConfig.shortName}
            <span className="text-accent">.</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-10">
          <div>
            <p className="font-mono text-xs text-accent">{"// navigate"}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-accent">{"// connect"}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <s.icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6">
        <p className="mx-auto max-w-6xl font-mono text-xs text-muted-foreground">
          © {year} {siteConfig.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
