# Editorial Redesign — Phase 1 (Foundation + Kit + Home Vertical Slice)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lay the editorial design-system foundation, build the shared component kit + new site chrome, and rebuild the home page (`/`) end-to-end so the new direction can be validated live before propagating to the remaining pages in Phase 2.

**Architecture:** Adopt the design tokens + Tailwind config from `docs/`. Build a `src/app/components/editorial/` primitive kit (Wrap, Hairline, Kicker, Ref, SectionHeader, MetaStrip, Button, Badge, Disclosure, Card, Hero). Replace `Navigation` and `Footer`. Rebuild `/` from those primitives. Pages other than `/` will look visually broken between this plan and Phase 2 — that's expected and explicitly accepted by the spec.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3.4, framer-motion (subtle scroll reveals only), markdown-to-jsx (blog), Google Fonts via `<link>`.

**Spec reference:** `docs/superpowers/specs/2026-05-06-editorial-redesign-design.md`

**Out of scope for Phase 1:** `/services`, `/skills`, `/projects`, `/timeline`, `/contact`, `/blog`, `/blog/posts/[slug]`, removal of unused npm packages, removal of dead component files. All deferred to Phase 2 + Phase 3.

**Verification model:** This is a visual UI redesign. We do not have a visual-regression test suite. Per task, verification is: TypeScript compiles (`npx tsc --noEmit`), Next.js builds where applicable (`npm run build`), and the dev server renders the page without runtime errors (`npm run dev` then visually inspect). Per-task commits keep the history granular so any regression is easy to bisect.

---

## File Structure

### New files
- `src/styles/tokens.ts` — design-system source of truth (copied from `docs/tokens.ts`)
- `src/app/components/editorial/Wrap.tsx` — 1100px-max responsive container
- `src/app/components/editorial/Hairline.tsx` — 1px line divider
- `src/app/components/editorial/Kicker.tsx` — mono uppercase label, optional accent rule
- `src/app/components/editorial/Ref.tsx` — inline mono reference (e.g. `§02`)
- `src/app/components/editorial/SectionHeader.tsx` — kicker + serif H2 + ref + bottom hairline
- `src/app/components/editorial/MetaStrip.tsx` — horizontal label/value pairs
- `src/app/components/editorial/Button.tsx` — square-corner button (variants: default, primary, ghost, accent)
- `src/app/components/editorial/Badge.tsx` — square mono uppercase 10px badge
- `src/app/components/editorial/Disclosure.tsx` — accessible disclosure (used in Phase 2 for FAQ; built now)
- `src/app/components/editorial/Card.tsx` — `bg-paper-2` square card with hairline border
- `src/app/components/editorial/Hero.tsx` — navy hero with eyebrow + serif H1 + lede + MetaStrip + 6px tan accent rule
- `src/app/components/editorial/Navigation.tsx` — new editorial top nav (replaces `Navigation.tsx`)
- `src/app/components/editorial/Footer.tsx` — new editorial footer (replaces `Footer.tsx`)
- `src/app/components/editorial/index.ts` — barrel export
- `src/app/components/ClosingCTA.tsx` — editorial closing CTA block (replaces `SayHi` usage on home)

### Modified files
- `tailwind.config.ts` — replace with `docs/tailwind.config.ts` (import path adjusted to `./src/styles/tokens`)
- `src/app/layout.tsx` — Google Fonts `<link>`, drop `ThemeProvider` + `MoveingParticles` + `Container` + `inter` next-font, swap to new editorial chrome, body classes `bg-paper text-ink font-sans antialiased`
- `src/app/globals.css` — wholesale rewrite (kept layers, smooth scroll, prose overrides for editorial type, editorial helpers; removed dark mode, gradients, projectTab, btn-primary/secondary, custom scrollbar)
- `src/app/page.tsx` — recompose home from editorial kit
- `src/app/components/Skills.tsx` — rebuild rendering (preserve data shape)
- `src/app/components/Projects.jsx` — rebuild rendering (preserve data shape)
- `src/app/components/Testimonials.tsx` — rebuild rendering (preserve data shape)

### Asset moves
- `docs/logo (1).png` → `public/logo.png`

---

## Task 0: Branch + clean tree check

**Files:** none

- [ ] **Step 1: Verify clean working tree**

Run:
```
git status
```
Expected: `nothing to commit, working tree clean`. If dirty, ask user before continuing.

- [ ] **Step 2: Sync `main`**

Run:
```
git fetch origin && git checkout main && git pull --ff-only
```
Expected: branch updated.

- [ ] **Step 3: Create the redesign branch**

Run:
```
git checkout -b redesign/editorial
```
Expected: `Switched to a new branch 'redesign/editorial'`.

- [ ] **Step 4: Confirm Node + dev server boot baseline**

Run:
```
npm run dev
```
Open `http://localhost:3000` in a browser, confirm the current (old) site loads without console errors. Stop the dev server (Ctrl-C). This baseline ensures any later breakage is from our changes, not pre-existing.

---

## Task 1: Add design tokens

**Files:**
- Create: `src/styles/tokens.ts`

- [ ] **Step 1: Create the tokens file**

Create `src/styles/tokens.ts` with the exact content from `docs/tokens.ts` (copy verbatim — it's the source of truth). The file exports `color`, `fontFamily`, `fontWeight`, `fontSize`, `lineHeight`, `letterSpacing`, `space`, `breakpoint`, `container`, `borderWidth`, `radius`, `elevation`, `duration`, `easing`, `z`, `cssVars`, and `Token`.

Run:
```
cp "docs/tokens.ts" src/styles/tokens.ts
```
Expected: file exists at `src/styles/tokens.ts`.

- [ ] **Step 2: Verify TypeScript compiles**

Run:
```
npx tsc --noEmit
```
Expected: no new errors introduced by `src/styles/tokens.ts` (existing project errors, if any, may persist — only fail if a NEW error appears with `src/styles/tokens.ts` in its path).

- [ ] **Step 3: Commit**

Run:
```
git add src/styles/tokens.ts
git commit -m "feat(redesign): add editorial design tokens"
```

---

## Task 2: Replace Tailwind config

**Files:**
- Modify: `tailwind.config.ts` (full replacement)

- [ ] **Step 1: Replace the config**

Replace the entire contents of `tailwind.config.ts` with the content of `docs/tailwind.config.ts`, with one edit: change the import line from `from './tokens'` to `from './src/styles/tokens'`.

Final file contents (paste verbatim):

```ts
/**
 * Subhra Sekhar — Tailwind Config
 * v1.0 · May 2026
 *
 * Wired to ./src/styles/tokens.ts. Keep both in sync.
 */
import type { Config } from 'tailwindcss';
import {
  color,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  space,
  breakpoint,
  container,
  borderWidth,
  radius,
  elevation,
  duration,
  easing,
  z,
} from './src/styles/tokens';

const px = (n: number) => `${n}px`;
const spacing = Object.fromEntries(
  Object.entries(space).map(([k, v]) => [k, px(v)])
) as Record<string, string>;

export default {
  content: ['./src/**/*.{ts,tsx,js,jsx,html,md,mdx}'],
  theme: {
    screens: {
      sm:  `${breakpoint.sm}px`,
      md:  `${breakpoint.md}px`,
      lg:  `${breakpoint.lg}px`,
      xl:  `${breakpoint.xl}px`,
      '2xl': `${breakpoint.xxl}px`,
    },
    colors: {
      transparent: 'transparent',
      current:     'currentColor',
      navy:    color.navy,
      'navy-2': color.navy2,
      ink:     color.ink,
      paper:   color.paper,
      'paper-2': color.paper2,
      line:    color.line,
      muted:   color.muted,
      accent:  color.accent,
      danger:  color.danger,
      warn:    color.warn,
      success: color.success,
    },
    fontFamily: {
      serif: fontFamily.serif.split(',').map(s => s.trim()),
      sans:  fontFamily.sans.split(',').map(s => s.trim()),
      mono:  fontFamily.mono.split(',').map(s => s.trim()),
    },
    fontWeight: {
      light:    String(fontWeight.light),
      normal:   String(fontWeight.regular),
      medium:   String(fontWeight.medium),
      semibold: String(fontWeight.semibold),
      bold:     String(fontWeight.bold),
    },
    fontSize: {
      display: [px(fontSize.display), { lineHeight: String(lineHeight.display), letterSpacing: letterSpacing.display, fontWeight: '500' }],
      h1:      [px(fontSize.h1),      { lineHeight: String(lineHeight.h1),      letterSpacing: letterSpacing.heading, fontWeight: '500' }],
      h2:      [px(fontSize.h2),      { lineHeight: String(lineHeight.h2),      letterSpacing: letterSpacing.heading, fontWeight: '500' }],
      h3:      [px(fontSize.h3),      { lineHeight: String(lineHeight.h3),      letterSpacing: letterSpacing.heading, fontWeight: '600' }],
      body:    [px(fontSize.body),    { lineHeight: String(lineHeight.body) }],
      small:   [px(fontSize.small),   { lineHeight: '1.55' }],
      caption: [px(fontSize.caption), { lineHeight: '1.5' }],
      micro:   [px(fontSize.micro),   { lineHeight: '1.4', letterSpacing: letterSpacing.kicker }],
    },
    letterSpacing: {
      display: letterSpacing.display,
      heading: letterSpacing.heading,
      body:    letterSpacing.body,
      kicker:  letterSpacing.kicker,
      label:   letterSpacing.label,
      ref:     letterSpacing.ref,
    },
    spacing,
    maxWidth: {
      content: px(container.max),
      prose:   '65ch',
    },
    borderWidth: {
      DEFAULT: px(borderWidth.hairline),
      0:       '0',
      hairline: px(borderWidth.hairline),
      accent:   px(borderWidth.accent),
      strong:   px(borderWidth.strong),
    },
    borderRadius: {
      none: '0',
      pill: `${radius.pill}px`,
    },
    boxShadow: {
      none:  elevation.none,
      popup: elevation.popup,
      modal: elevation.modal,
    },
    transitionDuration: {
      micro: `${duration.micro}ms`,
      ui:    `${duration.ui}ms`,
      page:  `${duration.page}ms`,
    },
    transitionTimingFunction: {
      standard: easing.standard,
      in:       easing.in,
      out:      easing.out,
    },
    zIndex: {
      base:    String(z.base),
      raised:  String(z.raised),
      sticky:  String(z.sticky),
      overlay: String(z.overlay),
      modal:   String(z.modal),
      toast:   String(z.toast),
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }: { addUtilities: (u: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        '.kicker': {
          fontFamily: fontFamily.mono,
          fontSize: '11px',
          letterSpacing: letterSpacing.kicker,
          textTransform: 'uppercase',
          color: color.muted,
        },
        '.ref': {
          fontFamily: fontFamily.mono,
          fontSize: '11px',
          letterSpacing: letterSpacing.ref,
          color: color.accent,
        },
        '.hairline': {
          borderTop: `1px solid ${color.line}`,
        },
        '.focus-ring': {
          outline: `2px solid ${color.accent}`,
          outlineOffset: '2px',
        },
      });
    },
  ],
} satisfies Config;
```

Note the additions vs `docs/tailwind.config.ts`: `mdx` and `md` added to `content` glob, `@tailwindcss/typography` plugin added (it is already in `devDependencies` and is needed by the blog prose).

- [ ] **Step 2: Verify TypeScript compiles**

Run:
```
npx tsc --noEmit
```
Expected: no new errors from `tailwind.config.ts`.

- [ ] **Step 3: Commit**

Run:
```
git add tailwind.config.ts
git commit -m "feat(redesign): replace tailwind config with editorial system"
```

Note: do NOT run a full `npm run build` here. The codebase still uses Tailwind classes (`text-primary-600`, `dark:bg-…`, gradients) that no longer exist. The build will only pass once Phase 1 home + chrome are rebuilt — and that's fine for intermediate commits.

---

## Task 3: Move logo to public

**Files:**
- Move: `docs/logo (1).png` → `public/logo.png`

- [ ] **Step 1: Move + rename**

Run:
```
mv "docs/logo (1).png" public/logo.png
```
Expected: file at `public/logo.png`.

- [ ] **Step 2: Confirm**

Run:
```
ls -la public/logo.png
```
Expected: file exists, size ~2.4 MB (optimization deferred to Phase 3 cleanup).

- [ ] **Step 3: Commit**

```
git add public/logo.png "docs/logo (1).png"
git commit -m "chore(redesign): move brand logo to public/"
```

---

## Task 4: Update layout.tsx — fonts, body, chrome stub

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Read current `src/app/layout.tsx`** to confirm structure (metadata, JSON-LD, GA — all preserved).

- [ ] **Step 2: Replace `src/app/layout.tsx`** with the version below. This:
  - Adds Google Fonts `<link>` + preconnects in `<head>`
  - Removes `next/font/google` Inter import (Tailwind handles font families now)
  - Removes `ThemeProvider`, `ThemeToggle`, `MoveingParticles`, `Container`, the `<script>` that sets `'dark'` on `<html>`
  - Body becomes `bg-paper text-ink font-sans antialiased`
  - Imports new editorial `Navigation` and `Footer` (created in Tasks 12-13). Until those exist, this file will fail to import them — see Step 3 for the order.

```tsx
// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import { generateCanonicalMetadata } from "./components/utils/CanonicalUrl";

const Navigation = dynamic(() => import("./components/editorial/Navigation"));
const Footer = dynamic(() => import("./components/editorial/Footer"));

const gaID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
const url = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://www.subhrasekhar.in";
const siteTitle = "Subhra Sekhar | Freelance Full Stack Developer — React, Next.js, Node.js";
const siteDescription =
  "Hire Subhra Sekhar Mukherjee — full-stack developer and tech consultant with 13+ years of experience.";

export const metadata: Metadata = {
  title: { default: siteTitle, template: "%s | Subhra Sekhar" },
  description: siteDescription,
  metadataBase: new URL(url),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url,
    siteName: "Subhra Sekhar",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription },
  ...generateCanonicalMetadata(),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F3EC",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Subhra Sekhar Mukherjee",
  url,
  jobTitle: "Full Stack Developer & Tech Consultant",
  email: "qsekhar@gmail.com",
  knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "qsekhar@gmail.com",
    availableLanguage: "English",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Inter:wght@300..700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="bg-paper text-ink font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          id="structured-data"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={gaID} />}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Note the temporary import errors**

This file imports `./components/editorial/Navigation` and `./components/editorial/Footer`, which don't exist yet (created in Tasks 12-13). The TypeScript checker will fail until then. **Do not attempt to make this commit pass `tsc` in isolation.** Commit anyway — the next foundation tasks resolve it.

- [ ] **Step 4: Commit**

```
git add src/app/layout.tsx
git commit -m "feat(redesign): rewire root layout for editorial system

- Google Fonts via <link> (Fraunces, Inter, JetBrains Mono)
- Drop ThemeProvider, ThemeToggle, MoveingParticles, Container
- Body uses paper/ink/sans tokens
- Wire to new editorial Navigation/Footer (built in later tasks)"
```

---

## Task 5: Rewrite globals.css

**Files:**
- Modify: `src/app/globals.css` (full replacement)

- [ ] **Step 1: Replace `src/app/globals.css`** with the contents below. This drops every dark-mode rule, gradient utility, projectTab/btn-primary/btn-secondary/gradient-text/section-label/scrollbar declaration. It keeps the Tailwind layers, smooth scroll, line-clamp helpers, and adds a prose theme tuned to the editorial type system.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: theme('fontFamily.sans');
    color: theme('colors.ink');
    background: theme('colors.paper');
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    font-family: theme('fontFamily.serif');
    color: theme('colors.ink');
    font-weight: 500;
    letter-spacing: -0.015em;
  }

  ::selection {
    background: theme('colors.accent');
    color: theme('colors.paper');
  }

  *:focus-visible {
    outline: 2px solid theme('colors.accent');
    outline-offset: 2px;
  }
}

@layer utilities {
  .accent-rule {
    display: inline-block;
    width: 36px;
    height: 1px;
    background: theme('colors.accent');
    vertical-align: middle;
    margin-right: 8px;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

/* Editorial prose theme — overrides @tailwindcss/typography defaults */
.prose {
  color: theme('colors.ink');
  font-family: theme('fontFamily.sans');
  font-size: 15px;
  line-height: 1.7;
  max-width: 65ch;
}
.prose h1, .prose h2, .prose h3, .prose h4 {
  font-family: theme('fontFamily.serif');
  color: theme('colors.ink');
  letter-spacing: -0.015em;
  font-weight: 500;
}
.prose h1 { font-size: 36px; line-height: 1.1; margin-top: 2em; margin-bottom: 0.6em; }
.prose h2 { font-size: 26px; line-height: 1.15; margin-top: 1.8em; margin-bottom: 0.6em; }
.prose h3 { font-size: 19px; line-height: 1.25; margin-top: 1.6em; margin-bottom: 0.5em; font-weight: 600; }
.prose p { margin: 0 0 1em; }
.prose a {
  color: theme('colors.accent');
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
}
.prose a:hover { color: theme('colors.navy'); }
.prose code {
  font-family: theme('fontFamily.mono');
  font-size: 0.92em;
  background: theme('colors.paper-2');
  border: 1px solid theme('colors.line');
  padding: 1px 5px;
  border-radius: 0;
}
.prose pre {
  font-family: theme('fontFamily.mono');
  background: theme('colors.navy');
  color: theme('colors.paper');
  padding: 16px 18px;
  border-radius: 0;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.55;
}
.prose pre code {
  background: transparent;
  border: 0;
  padding: 0;
  color: inherit;
}
.prose blockquote {
  border-left: 3px solid theme('colors.accent');
  padding-left: 18px;
  font-style: normal;
  color: theme('colors.muted');
  margin: 1.4em 0;
}
.prose img {
  max-width: 100%;
  height: auto;
  border: 1px solid theme('colors.line');
}
.prose hr {
  border: 0;
  border-top: 1px solid theme('colors.line');
  margin: 2em 0;
}
.prose ul, .prose ol { padding-left: 1.5em; margin: 0 0 1em; }
.prose li { margin: 0.3em 0; }
.prose table {
  border-collapse: collapse;
  width: 100%;
  font-size: 13.5px;
}
.prose th, .prose td {
  border-bottom: 1px solid theme('colors.line');
  padding: 8px 10px;
  text-align: left;
}
.prose th {
  font-family: theme('fontFamily.mono');
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: theme('colors.muted');
}
```

- [ ] **Step 2: Commit**

```
git add src/app/globals.css
git commit -m "feat(redesign): rewrite globals.css for editorial type + prose"
```

---

## Task 6: Foundation checkpoint — visual sanity check

**Files:** none modified

- [ ] **Step 1: Start dev server**

Run:
```
npm run dev
```

- [ ] **Step 2: Open `http://localhost:3000`**

Expected: page loads but is **visibly broken** — gradient classes don't apply, dark-mode classes are dead, NavBar/Footer fail to render because the editorial versions don't exist yet. **This is expected.** Look only for:
  - No 500-class server crashes (the page should still render some HTML)
  - The Google Fonts `<link>` is in `<head>` (DevTools → Elements)
  - Body background should be the warm paper color `#F7F3EC`
  - Body text should default to the Inter family

- [ ] **Step 3: Stop dev server (Ctrl-C)** and continue.

If the page does not render at all (full Next.js error overlay about `Navigation` not found), that's still fine — Tasks 7-14 will resolve it.

---

## Task 7: Editorial primitives — Wrap, Hairline, Kicker, Ref

**Files:**
- Create: `src/app/components/editorial/Wrap.tsx`
- Create: `src/app/components/editorial/Hairline.tsx`
- Create: `src/app/components/editorial/Kicker.tsx`
- Create: `src/app/components/editorial/Ref.tsx`

- [ ] **Step 1: Create `Wrap.tsx`**

```tsx
// src/app/components/editorial/Wrap.tsx
import type { ReactNode } from "react";

export default function Wrap({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag className={`max-w-content mx-auto px-5 lg:px-7 ${className}`}>
      {children}
    </Tag>
  );
}
```

Note: `px-5` = 24px (mobile gutter), `lg:px-7` = 48px (desktop gutter), per `space[5]` and `space[7]` in tokens. `max-w-content` = 1100px from the Tailwind config.

- [ ] **Step 2: Create `Hairline.tsx`**

```tsx
// src/app/components/editorial/Hairline.tsx
export default function Hairline({ className = "" }: { className?: string }) {
  return <div className={`border-t border-line ${className}`} role="separator" />;
}
```

- [ ] **Step 3: Create `Kicker.tsx`**

```tsx
// src/app/components/editorial/Kicker.tsx
import type { ReactNode } from "react";

export default function Kicker({
  children,
  rule = false,
  className = "",
}: {
  children: ReactNode;
  rule?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`font-mono uppercase tracking-kicker text-micro text-muted ${className}`}
    >
      {rule && <span className="accent-rule" aria-hidden />}
      {children}
    </span>
  );
}
```

- [ ] **Step 4: Create `Ref.tsx`**

```tsx
// src/app/components/editorial/Ref.tsx
import type { ReactNode } from "react";

export default function Ref({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-micro tracking-ref text-accent ${className}`}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 5: Verify TypeScript**

Run:
```
npx tsc --noEmit
```
Expected: no new errors in `src/app/components/editorial/`.

- [ ] **Step 6: Commit**

```
git add src/app/components/editorial/Wrap.tsx src/app/components/editorial/Hairline.tsx src/app/components/editorial/Kicker.tsx src/app/components/editorial/Ref.tsx
git commit -m "feat(redesign): editorial primitives — Wrap, Hairline, Kicker, Ref"
```

---

## Task 8: Editorial primitives — SectionHeader, MetaStrip

**Files:**
- Create: `src/app/components/editorial/SectionHeader.tsx`
- Create: `src/app/components/editorial/MetaStrip.tsx`

- [ ] **Step 1: Create `SectionHeader.tsx`**

```tsx
// src/app/components/editorial/SectionHeader.tsx
import Kicker from "./Kicker";
import Ref from "./Ref";

export default function SectionHeader({
  kicker,
  title,
  refLabel,
  className = "",
}: {
  kicker: string;
  title: string;
  refLabel?: string;
  className?: string;
}) {
  return (
    <header className={`flex items-end justify-between border-b border-line pb-3 mb-6 ${className}`}>
      <div className="flex flex-col gap-2">
        <Kicker>{kicker}</Kicker>
        <h2 className="font-serif text-h2">{title}</h2>
      </div>
      {refLabel && <Ref className="hidden sm:inline">{refLabel}</Ref>}
    </header>
  );
}
```

- [ ] **Step 2: Create `MetaStrip.tsx`**

```tsx
// src/app/components/editorial/MetaStrip.tsx
import type { ReactNode } from "react";

export type MetaItem = { label: string; value: ReactNode };

export default function MetaStrip({
  items,
  className = "",
  inverse = false,
}: {
  items: MetaItem[];
  className?: string;
  inverse?: boolean;
}) {
  const labelClass = inverse ? "text-paper/70" : "text-muted";
  const valueClass = inverse ? "text-paper" : "text-ink";
  const borderClass = inverse ? "border-paper/20" : "border-line";

  return (
    <dl className={`flex flex-wrap gap-x-7 gap-y-4 pt-5 border-t ${borderClass} ${className}`}>
      {items.map((it, i) => (
        <div key={i} className="flex flex-col gap-1 min-w-0">
          <dt className={`font-mono uppercase tracking-label text-[10px] ${labelClass}`}>{it.label}</dt>
          <dd className={`font-serif text-body ${valueClass}`}>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
```

- [ ] **Step 3: Verify TypeScript**

Run: `npx tsc --noEmit` — expect no new errors.

- [ ] **Step 4: Commit**

```
git add src/app/components/editorial/SectionHeader.tsx src/app/components/editorial/MetaStrip.tsx
git commit -m "feat(redesign): editorial primitives — SectionHeader, MetaStrip"
```

---

## Task 9: Editorial primitives — Button, Badge, Disclosure

**Files:**
- Create: `src/app/components/editorial/Button.tsx`
- Create: `src/app/components/editorial/Badge.tsx`
- Create: `src/app/components/editorial/Disclosure.tsx`

- [ ] **Step 1: Create `Button.tsx`**

```tsx
// src/app/components/editorial/Button.tsx
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "default" | "primary" | "ghost" | "accent";

const variantClasses: Record<Variant, string> = {
  default: "bg-ink text-paper border-ink hover:opacity-85",
  primary: "bg-navy text-paper border-navy hover:bg-navy-2 hover:border-navy-2",
  ghost:   "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
  accent:  "bg-accent text-paper border-accent hover:opacity-85",
};

const base =
  "inline-flex items-center gap-2 px-5 py-3 font-sans font-medium text-small tracking-wide border transition-ui transition-colors focus:outline-none focus-visible:ring-0 focus-visible:focus-ring";

type CommonProps = { variant?: Variant; children: ReactNode; className?: string };

export function Button({
  variant = "default",
  children,
  className = "",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "default",
  children,
  className = "",
  href,
  ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} {...rest} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
}

export default Button;
```

- [ ] **Step 2: Create `Badge.tsx`**

```tsx
// src/app/components/editorial/Badge.tsx
import type { ReactNode } from "react";

export default function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 font-mono uppercase text-[10px] tracking-label border border-ink text-ink ${className}`}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 3: Create `Disclosure.tsx`**

```tsx
// src/app/components/editorial/Disclosure.tsx
"use client";
import { useState, useId, type ReactNode } from "react";

export default function Disclosure({
  question,
  children,
  defaultOpen = false,
}: {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border-t border-line">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-serif text-h3">{question}</span>
        <span className="font-mono text-muted text-[14px]">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div id={id} className="pb-5 text-body text-ink/85">
          {children}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Verify TypeScript**

Run: `npx tsc --noEmit` — expect no new errors.

- [ ] **Step 5: Commit**

```
git add src/app/components/editorial/Button.tsx src/app/components/editorial/Badge.tsx src/app/components/editorial/Disclosure.tsx
git commit -m "feat(redesign): editorial primitives — Button, Badge, Disclosure"
```

---

## Task 10: Editorial primitives — Card, Hero

**Files:**
- Create: `src/app/components/editorial/Card.tsx`
- Create: `src/app/components/editorial/Hero.tsx`

- [ ] **Step 1: Create `Card.tsx`**

```tsx
// src/app/components/editorial/Card.tsx
import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  accent = false,
  as: Tag = "article",
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={`bg-paper-2 border border-line p-5 lg:p-6 ${
        accent ? "border-l-accent border-l-[3px]" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
```

- [ ] **Step 2: Create `Hero.tsx`**

```tsx
// src/app/components/editorial/Hero.tsx
import type { ReactNode } from "react";
import Wrap from "./Wrap";
import MetaStrip, { type MetaItem } from "./MetaStrip";

export default function Hero({
  eyebrow,
  title,
  lede,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  meta?: MetaItem[];
}) {
  return (
    <section className="bg-navy text-paper border-b-[6px] border-accent">
      <Wrap className="py-9 lg:py-10">
        <div className="font-mono uppercase tracking-kicker text-[11px] text-accent mb-5">
          {eyebrow}
        </div>
        <h1 className="font-serif text-display text-paper">{title}</h1>
        {lede && (
          <p className="mt-5 max-w-[640px] text-paper/80 text-[17px] leading-[1.55] font-sans">
            {lede}
          </p>
        )}
        {meta && meta.length > 0 && (
          <div className="mt-7">
            <MetaStrip items={meta} inverse />
          </div>
        )}
      </Wrap>
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript**

Run: `npx tsc --noEmit` — expect no new errors.

- [ ] **Step 4: Commit**

```
git add src/app/components/editorial/Card.tsx src/app/components/editorial/Hero.tsx
git commit -m "feat(redesign): editorial primitives — Card, Hero"
```

---

## Task 11: Editorial barrel export

**Files:**
- Create: `src/app/components/editorial/index.ts`

- [ ] **Step 1: Create `index.ts`**

```ts
// src/app/components/editorial/index.ts
export { default as Wrap } from "./Wrap";
export { default as Hairline } from "./Hairline";
export { default as Kicker } from "./Kicker";
export { default as Ref } from "./Ref";
export { default as SectionHeader } from "./SectionHeader";
export { default as MetaStrip, type MetaItem } from "./MetaStrip";
export { default as Card } from "./Card";
export { default as Hero } from "./Hero";
export { default as Badge } from "./Badge";
export { default as Disclosure } from "./Disclosure";
export { Button, ButtonLink, default as ButtonDefault } from "./Button";
export { default as Navigation } from "./Navigation";
export { default as Footer } from "./Footer";
```

Note: this file references `./Navigation` and `./Footer` which are created in Tasks 12-13. TypeScript check will fail until then — proceed anyway and let Tasks 12-13 resolve it.

- [ ] **Step 2: Commit**

```
git add src/app/components/editorial/index.ts
git commit -m "feat(redesign): editorial kit barrel export"
```

---

## Task 12: New Navigation

**Files:**
- Create: `src/app/components/editorial/Navigation.tsx`

- [ ] **Step 1: Create `Navigation.tsx`**

Behavior: top bar, sticky with bottom hairline. Left: small logo image + serif wordmark `Subhra Sekhar.`. Right: mono uppercase nav links separated by `·` dots on desktop. Mobile: hamburger that opens a paper drawer with the same items in a vertical list. No theme toggle. Active route gets accent underline.

```tsx
// src/app/components/editorial/Navigation.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Wrap from "./Wrap";

const items = [
  { href: "/", label: "Index" },
  { href: "/services", label: "Practice" },
  { href: "/projects", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/timeline", label: "Timeline" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-sticky bg-paper/95 backdrop-blur-sm border-b border-line">
      <Wrap className="flex items-center justify-between h-[64px]">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={32} height={32} priority />
          <span className="font-serif text-h3 text-ink">Subhra Sekhar.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {items.map((it, i) => (
            <span key={it.href} className="flex items-center gap-4">
              <Link
                href={it.href}
                className={`font-mono uppercase text-[11px] tracking-label transition-colors ${
                  isActive(it.href)
                    ? "text-ink border-b border-accent pb-0.5"
                    : "text-muted hover:text-ink"
                }`}
              >
                {it.label}
              </Link>
              {i < items.length - 1 && <span className="text-line">·</span>}
            </span>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(o => !o)}
          className="md:hidden font-mono text-[11px] tracking-label uppercase text-ink border border-ink px-3 py-2"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Wrap>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <Wrap className="py-4 flex flex-col gap-4">
            {items.map(it => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className={`font-mono uppercase text-small tracking-label py-2 ${
                  isActive(it.href) ? "text-ink" : "text-muted"
                }`}
              >
                {it.label}
              </Link>
            ))}
          </Wrap>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit` — `editorial/Navigation.tsx`, `editorial/index.ts`, and `app/layout.tsx` should now resolve cleanly (Footer still missing — next task).

- [ ] **Step 3: Commit**

```
git add src/app/components/editorial/Navigation.tsx
git commit -m "feat(redesign): editorial Navigation"
```

---

## Task 13: New Footer

**Files:**
- Create: `src/app/components/editorial/Footer.tsx`

- [ ] **Step 1: Create `Footer.tsx`**

```tsx
// src/app/components/editorial/Footer.tsx
import Link from "next/link";
import Wrap from "./Wrap";

const navItems = [
  { href: "/services", label: "Practice" },
  { href: "/projects", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/timeline", label: "Timeline" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

const social = [
  { href: "mailto:qsekhar@gmail.com", label: "Email" },
  { href: "https://api.whatsapp.com/send?phone=919674540974", label: "WhatsApp" },
  { href: "https://www.linkedin.com/in/subhra-sekhar-mukherjee", label: "LinkedIn" },
  { href: "https://github.com/qsekhar", label: "GitHub" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper text-ink border-t border-line mt-9">
      <Wrap className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div>
            <div className="font-serif text-h3 text-ink mb-2">Subhra Sekhar.</div>
            <p className="text-small text-muted max-w-[36ch]">
              Editorial-leaning engineering. Full-stack practice based in Kolkata.
            </p>
          </div>

          <div>
            <div className="font-mono uppercase text-[10px] tracking-label text-muted mb-3">Navigate</div>
            <ul className="flex flex-col gap-2">
              {navItems.map(n => (
                <li key={n.href}>
                  <Link href={n.href} className="text-small text-ink hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono uppercase text-[10px] tracking-label text-muted mb-3">Contact</div>
            <ul className="flex flex-col gap-2">
              {social.map(s => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-small text-ink hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 pt-5 border-t border-line flex flex-col sm:flex-row justify-between gap-3">
          <span className="font-mono text-[10px] tracking-label uppercase text-muted">
            SSM · MMVI · KOLKATA
          </span>
          <span className="font-mono text-[10px] tracking-label uppercase text-muted">
            © {year} Subhra Sekhar Mukherjee
          </span>
        </div>
      </Wrap>
    </footer>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit` — should be clean for all editorial files and `layout.tsx`. Other pages (`services`, `skills`, `timeline`, etc.) may still have type errors from removed Tailwind classes — note them, defer to Phase 2.

- [ ] **Step 3: Commit**

```
git add src/app/components/editorial/Footer.tsx
git commit -m "feat(redesign): editorial Footer"
```

---

## Task 14: Layout chrome smoke test

**Files:** none modified

- [ ] **Step 1: Start dev server**

Run: `npm run dev`

- [ ] **Step 2: Open `http://localhost:3000`**

Expected:
- Top: new editorial nav (logo + serif wordmark + mono links). Bottom hairline visible.
- Bottom: new editorial footer (3 columns, hairline above colophon).
- Page interior: still old/broken styling — that's expected. Other routes (`/services`, etc.) will look broken too — also expected.

- [ ] **Step 3: Inspect for runtime errors**

Open browser DevTools Console. There should be no React/Next runtime errors related to nav or footer. (Errors about missing Tailwind utility classes elsewhere are visual-only and acceptable for now.)

- [ ] **Step 4: Stop dev server (Ctrl-C).** No commit needed.

---

## Task 15: Rebuild `Skills` component

**Files:**
- Modify: `src/app/components/Skills.tsx`

- [ ] **Step 1: Read current `src/app/components/Skills.tsx`** to capture the existing data shape (skill arrays, categories, etc.). Preserve the data; replace only the rendering.

- [ ] **Step 2: Replace the file** with an editorial rendering. The component takes no props (per existing usage on home + skills pages). It renders categories as hairline-divided blocks with a mono category label and a row of `Badge` components per skill.

```tsx
// src/app/components/Skills.tsx
import Badge from "./editorial/Badge";

const categories: { label: string; skills: string[] }[] = [
  { label: "Frontend",   skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { label: "Backend",    skills: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST"] },
  { label: "Data",       skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Prisma", "AWS S3"] },
  { label: "Platform",   skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Linux"] },
  { label: "Mobile",     skills: ["React Native", "Flutter", "PWA", "Responsive"] },
  { label: "Tooling",    skills: ["Git", "VS Code", "Figma", "Postman", "Jest", "Webpack"] },
];

export default function Skills() {
  return (
    <div className="flex flex-col">
      {categories.map((cat, i) => (
        <div
          key={cat.label}
          className={`flex flex-col md:flex-row md:items-baseline gap-3 md:gap-7 py-5 ${
            i > 0 ? "border-t border-line" : ""
          }`}
        >
          <div className="font-mono uppercase text-[11px] tracking-label text-muted md:w-[140px] md:flex-shrink-0">
            {cat.label}
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map(s => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

If the original `Skills.tsx` reads its data from a separate constants file or fetches it, preserve that source rather than inlining. The structure above is what the editorial layout needs; data origin is up to the implementer to keep consistent with current behavior.

- [ ] **Step 3: Verify TypeScript**

Run: `npx tsc --noEmit` — `Skills.tsx` should be clean. Pages that import `Skills` (home, skills) may still have other unrelated errors.

- [ ] **Step 4: Commit**

```
git add src/app/components/Skills.tsx
git commit -m "feat(redesign): rebuild Skills as editorial badge grid"
```

---

## Task 16: Rebuild `Projects` component

**Files:**
- Modify: `src/app/components/Projects.jsx`

- [ ] **Step 1: Read current `src/app/components/Projects.jsx`** to capture the projects array shape (titles, descriptions, links, images, tech list, etc.). Preserve the data array verbatim if possible.

- [ ] **Step 2: Replace the file** with an editorial rendering. Each project becomes an editorial case-study row: mono index (`01`, `02`, …), serif title, mono meta strip (stack · year · client where present), body lede, accent `Visit →` link.

```jsx
// src/app/components/Projects.jsx
import Hairline from "./editorial/Hairline";

// PRESERVE THE EXISTING `projects` ARRAY — data shape unchanged.
// Adjust the field names below if the existing array uses different keys.
import { projects } from "./projects.data"; // if data lives in a separate file
// If projects are inlined in the original file, keep the inline array here.

export default function Projects() {
  return (
    <div className="flex flex-col">
      {projects.map((p, i) => (
        <article
          key={p.id ?? p.title}
          className={`grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-7 py-7 ${
            i > 0 ? "border-t border-line" : ""
          }`}
        >
          <div className="font-mono text-[11px] tracking-label text-muted uppercase">
            {String(i + 1).padStart(2, "0")}
          </div>

          <div>
            <h3 className="font-serif text-h3 text-ink mb-2">{p.title}</h3>
            <p className="text-small text-ink/85 max-w-[60ch]">{p.description}</p>
            {Array.isArray(p.tech) && p.tech.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-label text-muted">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono uppercase text-[11px] tracking-label text-accent hover:text-navy whitespace-nowrap self-start md:self-center"
            >
              Visit →
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
```

**Implementer note:** the field names (`title`, `description`, `tech`, `link`, `id`) reflect a typical shape but the original `Projects.jsx` may use different keys (`name`, `desc`, `stack`, `url`). Adjust the JSX field accesses to match the actual data array. Do not invent new data — match what's there.

- [ ] **Step 3: Verify TypeScript / Lint**

Run: `npm run lint` — expect no new errors in `Projects.jsx`.

- [ ] **Step 4: Commit**

```
git add src/app/components/Projects.jsx
git commit -m "feat(redesign): rebuild Projects as editorial case-study list"
```

---

## Task 17: Rebuild `Testimonials` component

**Files:**
- Modify: `src/app/components/Testimonials.tsx`

- [ ] **Step 1: Read current `src/app/components/Testimonials.tsx`** to capture the testimonials array (quote, author, role, company).

- [ ] **Step 2: Replace the file** with an editorial rendering. Large open-quote in serif, quote body, mono attribution, hairline divider between entries.

```tsx
// src/app/components/Testimonials.tsx
// PRESERVE EXISTING testimonials data array (or import) — only rendering changes.

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
};

const testimonials: Testimonial[] = [
  // Replace this with the existing data from the original file.
  // Field names may differ — adjust the JSX below accordingly.
];

export default function Testimonials() {
  return (
    <div className="flex flex-col">
      {testimonials.map((t, i) => (
        <figure
          key={i}
          className={`grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4 md:gap-7 py-7 ${
            i > 0 ? "border-t border-line" : ""
          }`}
        >
          <div className="font-serif text-[64px] leading-none text-accent" aria-hidden>
            “
          </div>
          <div>
            <blockquote className="font-serif text-h3 text-ink leading-snug max-w-[55ch]">
              {t.quote}
            </blockquote>
            <figcaption className="mt-4 font-mono uppercase text-[11px] tracking-label text-muted">
              {t.author}
              {t.role && ` · ${t.role}`}
              {t.company && ` · ${t.company}`}
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
```

**Implementer note:** keep the original testimonials array and field names — replace only the JSX wrapper and styling. Do not invent quotes.

- [ ] **Step 3: Verify TypeScript**

Run: `npx tsc --noEmit` — `Testimonials.tsx` clean.

- [ ] **Step 4: Commit**

```
git add src/app/components/Testimonials.tsx
git commit -m "feat(redesign): rebuild Testimonials as editorial quote list"
```

---

## Task 18: Build `ClosingCTA` component (replaces `SayHi` on home)

**Files:**
- Create: `src/app/components/ClosingCTA.tsx`

- [ ] **Step 1: Create `ClosingCTA.tsx`**

```tsx
// src/app/components/ClosingCTA.tsx
import Link from "next/link";
import Wrap from "./editorial/Wrap";
import Kicker from "./editorial/Kicker";
import { ButtonLink } from "./editorial/Button";

export default function ClosingCTA() {
  return (
    <section className="border-t border-line">
      <Wrap className="py-9 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-6">
          <div>
            <Kicker rule className="block mb-3">Available · Q2 2026</Kicker>
            <h2 className="font-serif text-h1 text-ink">Start a project.</h2>
            <p className="mt-3 text-body text-ink/80 max-w-[50ch]">
              Free 30-minute consult. We talk through your goals, the right shape of the work,
              and a transparent quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-block">
              <ButtonLink variant="primary" href="/contact">
                Say hi.
              </ButtonLink>
            </Link>
            <ButtonLink
              variant="ghost"
              href="https://api.whatsapp.com/send?phone=919674540974"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp →
            </ButtonLink>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit` — `ClosingCTA.tsx` clean.

- [ ] **Step 3: Commit**

```
git add src/app/components/ClosingCTA.tsx
git commit -m "feat(redesign): editorial ClosingCTA component"
```

---

## Task 19: Compose new home page

**Files:**
- Modify: `src/app/page.tsx` (full replacement)

- [ ] **Step 1: Replace `src/app/page.tsx`** with the editorial composition below. Drops the dynamic `HeroSection`, drops the bento grid, drops `SayHi` (replaced by `ClosingCTA`). Keeps the blog-post fetch logic.

```tsx
// src/app/page.tsx
import dynamic from "next/dynamic";
import Link from "next/link";
import GetBlogPostMetadata from "./components/utils/GetBlogPostMetadata";
import { Metadata } from "./components/interfaces/Post";
import { generateCanonicalMetadata } from "./components/utils/CanonicalUrl";
import type { Metadata as NextMetadata } from "next";

import Hero from "./components/editorial/Hero";
import Wrap from "./components/editorial/Wrap";
import SectionHeader from "./components/editorial/SectionHeader";
import Card from "./components/editorial/Card";
import Kicker from "./components/editorial/Kicker";

const Skills = dynamic(() => import("./components/Skills"));
const Projects = dynamic(() => import("./components/Projects"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const ClosingCTA = dynamic(() => import("./components/ClosingCTA"));

export const metadata: NextMetadata = {
  ...generateCanonicalMetadata(),
};

export default async function Home() {
  const postMetadata: Metadata[] = await GetBlogPostMetadata();
  const recentPosts = postMetadata
    ?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3) ?? [];

  return (
    <>
      <Hero
        eyebrow="Practice · v1.0"
        title="Subhra Sekhar."
        lede="An editorial, engineering-first practice. Full-stack work for teams that care about clarity, calm interfaces, and software that behaves well in the wild."
        meta={[
          { label: "Discipline", value: "Full-stack engineering" },
          { label: "Based in", value: "Kolkata, IN" },
          { label: "Available", value: "Q2 2026" },
        ]}
      />

      {/* §02 — What I build */}
      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="What I build." refLabel="§02" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: "01", title: "Web applications", body: "Production React / Next.js front-ends and Node back-ends. Type-safe end-to-end." },
              { id: "02", title: "APIs",            body: "REST and GraphQL services. Boring on purpose. Documented, observable, well-versioned." },
              { id: "03", title: "MVPs",            body: "From idea to shipped product in weeks, not quarters. Tight scope, opinionated stack." },
              { id: "04", title: "Mobile apps",     body: "React Native cross-platform builds where it pays. PWA when it doesn't." },
              { id: "05", title: "E-commerce",      body: "Headless storefronts. Payments, taxes, fulfilment that don't keep you up." },
              { id: "06", title: "Tech consulting", body: "Architecture review, hiring help, and second opinions for early-stage teams." },
            ].map(item => (
              <Card key={item.id}>
                <div className="font-mono uppercase text-[10px] tracking-label text-muted mb-2">{item.id}</div>
                <h3 className="font-serif text-h3 text-ink mb-2">{item.title}</h3>
                <p className="text-small text-ink/80">{item.body}</p>
              </Card>
            ))}
          </div>
        </Wrap>
      </section>

      {/* §03 — Skills */}
      <section className="py-9 lg:py-10 bg-paper-2">
        <Wrap>
          <SectionHeader kicker="Section 03" title="Practice." refLabel="§03" />
          <Skills />
        </Wrap>
      </section>

      {/* §04 — Selected work */}
      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 04" title="Selected work." refLabel="§04" />
          <Projects />
        </Wrap>
      </section>

      {/* §05 — Journal */}
      {recentPosts.length > 0 && (
        <section className="py-9 lg:py-10 bg-paper-2">
          <Wrap>
            <SectionHeader kicker="Section 05" title="From the journal." refLabel="§05" />
            <div className="flex flex-col">
              {recentPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/posts/${post.slug}`}
                  className={`grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 md:gap-7 py-5 ${
                    i > 0 ? "border-t border-line" : ""
                  } group`}
                >
                  <div className="font-mono uppercase text-[10px] tracking-label text-muted">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "2-digit", month: "short", year: "numeric"
                    })}
                  </div>
                  <div>
                    <h3 className="font-serif text-h3 text-ink group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    {post.subtitle && (
                      <p className="text-small text-ink/75 mt-1 line-clamp-2">{post.subtitle}</p>
                    )}
                  </div>
                  <span className="font-mono uppercase text-[10px] tracking-label text-accent self-start md:self-center">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-right">
              <Link href="/blog" className="font-mono uppercase text-[11px] tracking-label text-accent hover:text-navy">
                All articles →
              </Link>
            </div>
          </Wrap>
        </section>
      )}

      {/* §06 — Testimonials */}
      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 06" title="Said about the work." refLabel="§06" />
          <Testimonials />
        </Wrap>
      </section>

      {/* §07 — Closing */}
      <ClosingCTA />
    </>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`

Expected: `src/app/page.tsx` clean. There may still be type errors in pages NOT touched by Phase 1 (`/services`, `/skills`, `/timeline`, etc.) — note them but defer.

- [ ] **Step 3: Commit**

```
git add src/app/page.tsx
git commit -m "feat(redesign): compose home page from editorial kit"
```

---

## Task 20: Final visual validation + summary

**Files:** none

- [ ] **Step 1: Start dev server**

Run: `npm run dev`

- [ ] **Step 2: Open `http://localhost:3000`** and walk through the full home page top to bottom.

Manual checklist:
- [ ] Nav: small logo + serif "Subhra Sekhar." wordmark + 7 mono nav links separated by `·` dots, current `/` underlined in accent
- [ ] Hero: navy background, accent (tan) bottom rule, mono eyebrow, large serif `Subhra Sekhar.`, lede, meta strip (Discipline / Based in / Available)
- [ ] §02 What I build: 3-up grid of square `paper-2` cards with mono `01`–`06` IDs and serif titles
- [ ] §03 Practice (Skills): on `paper-2`, hairline-divided category rows with mono labels and skill `Badge`s
- [ ] §04 Selected work: hairline-divided project rows with mono index, serif titles
- [ ] §05 From the journal: 3 recent posts, hairline-divided, mono date, serif title, accent `Read →`
- [ ] §06 Testimonials: large serif open-quote, hairline rows
- [ ] §07 Closing CTA: hairline top, accent rule kicker, serif H1 `Start a project.`, primary button `Say hi.`, ghost button `WhatsApp →`
- [ ] Footer: `paper` bg, hairline top, 3 columns, colophon row `SSM · MMVI · KOLKATA`
- [ ] Responsive: resize to mobile (<768px). Nav collapses to `Menu` button. Hero meta wraps. Cards stack. No horizontal scroll.
- [ ] Console: no React errors. (Warnings about missing classes on other routes are OK — they're out of Phase 1 scope.)

- [ ] **Step 3: Take 3-4 screenshots** (desktop hero, desktop blog list, mobile hero, mobile nav drawer) and attach them to the PR description.

- [ ] **Step 4: Stop dev server.**

- [ ] **Step 5: Review summary commit**

```
git log --oneline main..redesign/editorial
```
Expected: ~17-20 commits, one logical change each.

- [ ] **Step 6: Push the branch (do NOT open a PR yet — wait for user review)**

```
git push -u origin redesign/editorial
```

- [ ] **Step 7: Hand back to user**

Tell the user:
- Phase 1 branch `redesign/editorial` is pushed
- Home page is fully rebuilt; other pages will look broken (expected)
- Ask user to review the live home page before Phase 2 (page propagation) is planned

---

## Self-review (run before handoff)

- [ ] Spec coverage — every Phase-1 spec section has at least one task above
- [ ] No placeholders — every code block contains real, runnable code
- [ ] Type consistency — `MetaItem` is defined in `MetaStrip.tsx` and re-exported via `index.ts`. `ButtonLink` is defined in `Button.tsx` and used by `ClosingCTA.tsx`. No name drift.
- [ ] Out-of-scope items called out — all Phase 2 / Phase 3 items have explicit "deferred" notes

---

## Phase 2 preview (NOT in this plan — listed only for context)

After Phase 1 is validated live by the user:

- `/services` — editorial numbered rows
- `/skills` — `Skills` component is already done; restyle the page wrapper + hero + categories layout
- `/projects` — `Projects` component is done; restyle the page wrapper + hero + tech wall + closing CTA
- `/timeline` — editorial timeline with mono year, serif role; stats become `MetaStrip`
- `/contact` — editorial contact grid + paper-2 form + `Disclosure`-based FAQ (replaces NextUI Accordion)
- `/blog` — editorial article index (`src/app/blog/page.tsx`)
- `/blog/posts/[slug]` — verify prose theme renders well; restyle share/related sections (`src/app/blog/posts/[slug]/page.tsx`)

## Phase 3 preview

- `npm uninstall @tsparticles/engine @tsparticles/react @tsparticles/slim react-type-animation @nextui-org/accordion @nextui-org/divider`
- Delete: `src/app/components/MoveingParticles.tsx`, `ThemeProvider.tsx`, `ThemeToggle.tsx`, `HeroSection.tsx`, `Container.tsx`, `SayHi.tsx`, `Tools.tsx` (verify unused), `OtherSkills.tsx` (verify unused), `Navigation.tsx` (old), `Footer.tsx` (old), `layout_new.tsx`
- Optimize `public/logo.png` (re-export under 200 KB, ideally SVG)
- `npm run build` clean, `npm run lint` clean
- Final PR for merge to `main`
