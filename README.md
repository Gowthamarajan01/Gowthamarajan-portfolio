<<<<<<< HEAD
# Gowthamarajan P — Developer Portfolio

A production-ready developer portfolio built with Next.js 15 (App Router), React 19,
TypeScript, and Tailwind CSS v4. Dark mode by default, glassmorphic "signal" design
language, Framer Motion micro-interactions, and a fully working contact form.

## Tech stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first config via `@theme` in `globals.css`)
- shadcn/ui-style primitives (Button, Card, Badge, Dialog, Tabs, Input, Textarea, Label)
- Framer Motion for animation
- lucide-react for icons
- next-themes for dark/light mode
- React Hook Form + Zod for the contact form
- Sonner for toast notifications
- Vercel Analytics + Speed Insights

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint      # eslint
```

> **Note:** `next/font/google` (Inter, Space Grotesk, JetBrains Mono) fetches font
> files from Google Fonts at build time. This requires normal internet access —
> it will work out of the box on your machine, on Vercel, or any CI with outbound
> internet, but will fail in network-sandboxed environments.

> **Note:** the contact form's EmailJS keys already live in `.env.local` at the
> project root. If you deploy this (e.g. to Vercel), add the same three
> `NEXT_PUBLIC_EMAILJS_*` variables in your hosting provider's environment
> variable settings — `.env.local` is gitignored and won't be committed or
> deployed automatically.

## Replace these before deploying

1. **Profile photo** — swap `public/images/profile.jpg` with a real photo
   (recommended: at least 960×1200, portrait orientation).
2. **Resume PDF** — replace `public/resume/Gowtham_Resume.pdf` with your actual resume.
   The filename is referenced directly in `src/components/sections/resume-viewer.tsx`
   and `src/components/sections/hero.tsx` — update the path there if you rename the file.
3. **OpenGraph image** — replace `public/images/og.png` (1200×630) for link previews.
4. **`src/data/config.ts`** — update `url`, `email`, and `github` username.
5. **`src/data/socials.ts`** — update social links.
6. **`src/data/projects.ts`** — add real GitHub/live URLs once repos are public;
   drop screenshots into `public/images/projects/` and reference them in `gallery`.
7. **Contact form** — sends email client-side via [EmailJS](https://www.emailjs.com/).
   Credentials live in `.env.local` (see `.env.example`) as `NEXT_PUBLIC_EMAILJS_*`
   vars — copy `.env.example`, fill in your own service/template/public key from
   the EmailJS dashboard, and confirm your EmailJS template's variable names
   match what's sent from `src/components/sections/contact-form.tsx`
   (`from_name`, `from_email`, `subject`, `message`).

## Project structure

```
src/
├── app/                    # routes (App Router)
│   ├── page.tsx            # home
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── resume/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx
│   ├── loading.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css         # design tokens + Tailwind v4 theme
├── components/
│   ├── ui/                 # base primitives (button, card, dialog, ...)
│   ├── shared/              # navbar, footer, theme toggle, motion wrappers
│   └── sections/             # page-level composed sections
├── data/                    # strongly-typed content: projects, skills, etc.
└── lib/                      # utils, animation presets, fonts, zod schemas
```

## Design notes

- **Palette**: a near-black "signal" background with an indigo primary and cyan
  accent — an oscilloscope/PCB-trace motif ties the visual language back to an
  electronics & embedded-systems background. Defined as HSL CSS variables in
  `globals.css`, toggled by the `.dark` class.
- **Motion**: shared presets live in `src/lib/animations.ts` (fade, slide, scale,
  blur-reveal, stagger, text-reveal, page transitions). `prefers-reduced-motion`
  is respected globally.
- **Accessibility**: semantic landmarks, visible focus rings, skip-to-content
  link, `aria-live` regions on dynamic text, labelled form fields with inline
  errors.

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo at vercel.com/new — zero config needed.

### Netlify

```bash
npm run build
```

Set the build command to `npm run build` and publish directory to `.next`
(with the Next.js Netlify plugin enabled), or use `netlify init` and follow
the prompts.

### Docker

```dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package*.json ./
RUN npm ci --omit=dev
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Roadmap

- [ ] Blog with MDX, categories, tags, reading time, syntax highlighting
- [ ] Project gallery screenshots + lightbox
- [ ] Command palette (⌘K) for quick navigation
- [ ] Real email delivery for the contact form
=======
# Gowthamarajan-portfolio
>>>>>>> 95ca1036c6b13926f7813f49bccd2a0a55dde553
