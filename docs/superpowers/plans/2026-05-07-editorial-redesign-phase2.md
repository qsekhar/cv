# Editorial Redesign — Phase 2 (Page Propagation)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the editorial component kit (built in Phase 1) to every remaining page so the site is visually consistent end-to-end.

**Architecture:** Each page is rebuilt to compose the editorial primitives — `Hero`, `Wrap`, `SectionHeader`, `Card`, `Badge`, `MetaStrip`, `ButtonLink`, `Disclosure` — and the rebuilt `Skills` / `Projects` / `Testimonials` / `ClosingCTA` components. Drop gradient classes, dark-mode classes, NextUI accordion, animated stats bands. Preserve content, metadata, JSON-LD, sitemap entries.

**Tech stack:** unchanged — Next 14 App Router, React 18, TS, Tailwind 3.4, framer-motion (subtle reveals), markdown-to-jsx (blog).

**Spec reference:** `docs/superpowers/specs/2026-05-06-editorial-redesign-design.md` (Section: "Page-by-page treatment").

**Out of scope for Phase 2:** removal of unused npm packages (`@nextui-org/*`, `tsparticles*`, `react-type-animation`), deletion of dead component files (`HeroSection.tsx`, `MoveingParticles.tsx`, `ThemeProvider.tsx`, `ThemeToggle.tsx`, old `Container.tsx`/`Navigation.tsx`/`Footer.tsx`/`SayHi.tsx`), logo PNG optimization. All deferred to Phase 3.

**Verification model:** TypeScript compile (`npx tsc --noEmit`), lint (`npm run lint`), and visual check via dev server. Per-page commits.

---

## Page-by-page tasks

Each task follows the same structure: read the existing page, replace it with editorial composition, type-check, commit.

---

### Task 1: `/services` rebuild

**File:** `src/app/services/page.tsx`

- [ ] **Step 1: Read the current file** to capture the services data array (titles, taglines, feature bullets, IDs, descriptions, icon names). Preserve all of it.

- [ ] **Step 2: Replace the page** with this composition:

```tsx
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import Kicker from "../components/editorial/Kicker";
import { ButtonLink } from "../components/editorial/Button";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const ClosingCTA = dynamic(() => import("../components/ClosingCTA"));

export const metadata: Metadata = {
  title: "Services — Freelance Full Stack Developer | Subhra Sekhar",
  description: "Web app development, REST API design, mobile apps, e-commerce, and MVP development. Hire Subhra Sekhar — 13+ years, 100+ delivered projects, free consultation.",
  ...generateCanonicalMetadata("services"),
};

// PRESERVE the existing services data array from the original file. Only the rendering changes.
const services = [
  // Copy from original. Field shape is typically: { id, title, tagline, description, features: string[], ... }
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Services."
        lede="Engineering practice across the full stack — clear scope, calm interfaces, software that behaves well in the wild."
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="Practice areas." refLabel="§02" />
          <div className="flex flex-col">
            {services.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className={`grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-7 py-7 ${
                  i > 0 ? "border-t border-line" : ""
                } scroll-mt-24`}
              >
                <div className="font-mono uppercase text-[11px] tracking-label text-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-h2 text-ink mb-1">{s.title}</h3>
                  {s.tagline && (
                    <div className="font-mono uppercase text-[11px] tracking-label text-accent mb-3">
                      {s.tagline}
                    </div>
                  )}
                  <p className="text-body text-ink/80 max-w-[60ch] mb-4">{s.description}</p>
                  {Array.isArray(s.features) && s.features.length > 0 && (
                    <ul className="flex flex-col mt-4">
                      {s.features.map((f: string) => (
                        <li
                          key={f}
                          className="relative pl-6 py-2 text-small text-ink/85 border-b border-line border-dashed last:border-b-0 before:content-[''] before:absolute before:left-0 before:top-[14px] before:w-3 before:h-px before:bg-accent"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Wrap>
      </section>

      <ClosingCTA />
    </>
  );
}
```

**Implementer note:** field names in the original `services` array may differ. Adjust accesses to match what's actually there. Do not invent services.

- [ ] **Step 3:** `npx tsc --noEmit 2>&1 | grep "services/page.tsx" || echo clean` — must say `clean`.

- [ ] **Step 4:** Commit:
```
git add src/app/services/page.tsx
git commit -m "feat(redesign): rebuild /services as editorial numbered rows"
```

---

### Task 2: `/skills` rebuild

**File:** `src/app/skills/page.tsx`

- [ ] **Step 1: Read** the current file to confirm what it imports. Phase 1 already rebuilt the `<Skills />` component — this page just needs a new wrapper.

- [ ] **Step 2: Replace** with:

```tsx
import dynamic from "next/dynamic";
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";

const Skills = dynamic(() => import("../components/Skills"));
const ClosingCTA = dynamic(() => import("../components/ClosingCTA"));

export const metadata: Metadata = {
  title: "Skills — Subhra Sekhar | Technical Expertise",
  description: "Technical skills and expertise of Subhra Sekhar Mukherjee — 13+ years of experience across modern technologies.",
  ...generateCanonicalMetadata("skills"),
};

export default function SkillsPage() {
  return (
    <>
      <Hero
        title="Practice."
        lede="The toolkit, organised by surface area. Selected based on what holds up under production weight, not what's loudest in the timeline."
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="Toolkit." refLabel="§02" />
          <Skills />
        </Wrap>
      </section>

      <ClosingCTA />
    </>
  );
}
```

- [ ] **Step 3:** TypeScript clean. Commit:
```
git add src/app/skills/page.tsx
git commit -m "feat(redesign): rebuild /skills with editorial wrapper"
```

---

### Task 3: `/timeline` rebuild

**Files:**
- Modify: `src/app/timeline/page.tsx`
- Modify: `src/app/components/TimeLine.tsx` (if it uses gradient classes)

- [ ] **Step 1: Read** current `src/app/timeline/page.tsx` and `src/app/components/TimeLine.tsx`. Capture the timeline entries (year/range, role, organization, body) — preserve them all.

- [ ] **Step 2: Replace `src/app/timeline/page.tsx`** with:

```tsx
import dynamic from "next/dynamic";
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import MetaStrip from "../components/editorial/MetaStrip";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";

const TimeLine = dynamic(() => import("../components/TimeLine"));
const ClosingCTA = dynamic(() => import("../components/ClosingCTA"));

export const metadata: Metadata = {
  title: "Timeline — Subhra Sekhar | Professional Journey",
  description: "Professional journey and career timeline of Subhra Sekhar Mukherjee — Full Stack Developer & Tech Consultant.",
  ...generateCanonicalMetadata("timeline"),
};

export default function TimelinePage() {
  return (
    <>
      <Hero
        title="Timeline."
        lede="13+ years across product engineering, consulting, and design. Calmly built, deliberately scaled."
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="Career." refLabel="§02" />
          <TimeLine />
        </Wrap>
      </section>

      <section className="py-9 lg:py-10 bg-paper-2">
        <Wrap>
          <SectionHeader kicker="Section 03" title="By the numbers." refLabel="§03" />
          <MetaStrip
            items={[
              { label: "Years", value: "13+" },
              { label: "Projects", value: "100+" },
              { label: "Clients", value: "50+" },
              { label: "Support", value: "24/7" },
            ]}
          />
        </Wrap>
      </section>

      <ClosingCTA />
    </>
  );
}
```

- [ ] **Step 3: Rebuild `src/app/components/TimeLine.tsx`** as an editorial vertical list. Preserve the timeline data array (entries with year, role, org, body). Replace the rendering with hairline-divided rows:

```tsx
// Each entry is a row with:
// - mono year/range label (left, fixed-width on md+)
// - serif role title + organization line + body text (right)
// - hairline divider between entries
```

If the data lives in a separate file or constants module, leave it alone — only the JSX changes.

- [ ] **Step 4:** TypeScript clean. Commit:
```
git add src/app/timeline/page.tsx src/app/components/TimeLine.tsx
git commit -m "feat(redesign): rebuild /timeline as editorial career list"
```

---

### Task 4: `/projects` rebuild

**File:** `src/app/projects/page.tsx`

- [ ] **Step 1: Read** the file. The `<Projects />` component was already rebuilt in Phase 1 — this page just needs the wrapper.

- [ ] **Step 2: Replace:**

```tsx
import dynamic from "next/dynamic";
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import Badge from "../components/editorial/Badge";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";

const Projects = dynamic(() => import("../components/Projects"));
const ClosingCTA = dynamic(() => import("../components/ClosingCTA"));

const technologies = [
  "React", "Next.js", "Vue.js", "TypeScript", "Tailwind",
  "Node.js", "Python", "Django", "Laravel", "PHP",
  "PostgreSQL", "MongoDB", "Redis", "MySQL",
  "AWS", "Docker", "Linux", "Nginx",
];

export const metadata: Metadata = {
  title: "Projects — Subhra Sekhar | Portfolio Showcase",
  description: "Selected work by Subhra Sekhar Mukherjee — Full Stack Developer & Tech Consultant. Innovative solutions across various industries.",
  ...generateCanonicalMetadata("projects"),
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Selected work."
        lede="A selection of recent client engagements, ranging from startups to global education platforms."
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="Engagements." refLabel="§02" />
          <Projects />
        </Wrap>
      </section>

      <section className="py-9 lg:py-10 bg-paper-2">
        <Wrap>
          <SectionHeader kicker="Section 03" title="Stack." refLabel="§03" />
          <div className="flex flex-wrap gap-2">
            {technologies.map(t => <Badge key={t}>{t}</Badge>)}
          </div>
        </Wrap>
      </section>

      <ClosingCTA />
    </>
  );
}
```

- [ ] **Step 3:** TypeScript clean. Commit:
```
git add src/app/projects/page.tsx
git commit -m "feat(redesign): rebuild /projects with editorial wrapper"
```

---

### Task 5: `/contact` rebuild

**File:** `src/app/contact/page.tsx`

- [ ] **Step 1: Read** the file thoroughly. It contains a contact form (with reCAPTCHA + nodemailer route), social links, FAQ data (likely in NextUI Accordion). Preserve the form's submit handler (POST to `/api/mail`), all input fields, the FAQ content array, and the `react-recaptcha-v3` integration.

- [ ] **Step 2: Replace** the page rendering. Form layout should be editorial — paper-2 surface, square inputs with `border-ink`, focus uses `focus-ring`. FAQ becomes `<Disclosure>` rows from the editorial kit (replacing NextUI Accordion).

```tsx
"use client";
// (Original may be a client component due to recaptcha + form state. Keep "use client" if it was there.)

import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import Disclosure from "../components/editorial/Disclosure";
import { Button } from "../components/editorial/Button";
// ... preserve recaptcha + form imports from original
```

The form structure:

```tsx
<form className="bg-paper-2 border border-line p-6 lg:p-8 flex flex-col gap-5">
  <label className="flex flex-col gap-2">
    <span className="font-mono uppercase text-[10px] tracking-label text-muted">Name</span>
    <input
      type="text"
      name="name"
      required
      className="bg-paper border border-ink px-3 py-2 font-sans text-body text-ink focus:outline-none focus-visible:focus-ring"
    />
  </label>
  {/* Repeat for email, subject, message — preserve original field names */}
  <Button type="submit" variant="primary">Send →</Button>
</form>
```

Contact info grid (left of form on desktop): hairline-bordered rows with mono labels (`EMAIL`, `WHATSAPP`, `LOCATION`) and serif/sans values.

FAQ section (replaces NextUI Accordion):

```tsx
<section className="py-9 lg:py-10 bg-paper-2">
  <Wrap>
    <SectionHeader kicker="Section 03" title="Questions." refLabel="§03" />
    <div className="flex flex-col">
      {faqs.map(f => (
        <Disclosure key={f.question} question={f.question}>
          {f.answer}
        </Disclosure>
      ))}
    </div>
  </Wrap>
</section>
```

**Critical preservation:**
- POST endpoint `/api/mail` and submit logic — unchanged
- reCAPTCHA v3 site key + verification — unchanged
- All FAQ entries (don't drop any)
- All contact info (email, WhatsApp, location)

- [ ] **Step 3: Drop** `@nextui-org/accordion` import. (Don't `npm uninstall` — Phase 3.)

- [ ] **Step 4:** TypeScript clean. Commit:
```
git add src/app/contact/page.tsx
git commit -m "feat(redesign): rebuild /contact with editorial form + Disclosure FAQ"
```

---

### Task 6: `/blog` (list) rebuild

**File:** `src/app/blog/page.tsx`

- [ ] **Step 1: Read** the file. Preserve `GetBlogPostMetadata()` call and the post sorting logic.

- [ ] **Step 2: Replace** with editorial article index:

```tsx
import Link from "next/link";
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import GetBlogPostMetadata from "../components/utils/GetBlogPostMetadata";
import { Metadata as PostMeta } from "../components/interfaces/Post";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — Subhra Sekhar | Writing on Engineering & Practice",
  description: "Articles on full-stack engineering, architecture, and practice notes by Subhra Sekhar Mukherjee.",
  ...generateCanonicalMetadata("blog"),
};

export default async function BlogPage() {
  const posts = (await GetBlogPostMetadata()) ?? [];
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Hero
        title="Journal."
        lede="Notes from practice — engineering decisions, architecture sketches, and the occasional opinion."
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="All articles." refLabel="§02" />
          <div className="flex flex-col">
            {sorted.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/posts/${post.slug}`}
                className={`grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 md:gap-7 py-5 group ${
                  i > 0 ? "border-t border-line" : ""
                }`}
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
        </Wrap>
      </section>
    </>
  );
}
```

- [ ] **Step 3:** TypeScript clean. Commit:
```
git add src/app/blog/page.tsx
git commit -m "feat(redesign): rebuild /blog as editorial article index"
```

---

### Task 7: `/blog/posts/[slug]` rebuild

**File:** `src/app/blog/posts/[slug]/page.tsx`

- [ ] **Step 1: Read** the file end-to-end. This is the most complex page — it likely uses `markdown-to-jsx`, `next-share`, related-posts logic, `Reading time`, sidebar, etc. Preserve all behavior. The new globals.css already provides the prose theme; this page just needs editorial chrome around the markdown.

- [ ] **Step 2: Restructure** the page into:
  - A small navy `<Hero>` with: kicker = published date, serif H1 = post title, lede = post subtitle
  - The markdown body wrapped in `<article className="prose mx-auto">` (the new `.prose` rules from globals.css handle typography)
  - Footer block: tags as `<Badge>`s, share buttons (preserve `next-share`), related-posts list as hairline-divided rows, "All articles →" link
  - No card shadows, no rounded buttons, no gradient highlights

```tsx
// Sketch:
<>
  <section className="bg-navy text-paper border-b-[6px] border-accent">
    <Wrap className="py-9 lg:py-10">
      <Kicker className="text-accent">{formattedDate}</Kicker>
      <h1 className="font-serif text-h1 text-paper mt-3">{post.title}</h1>
      {post.subtitle && (
        <p className="mt-5 max-w-[640px] text-paper/80 text-[17px] leading-[1.55] font-sans">
          {post.subtitle}
        </p>
      )}
      {/* Optional MetaStrip with reading time, author, etc. */}
    </Wrap>
  </section>

  <Wrap className="py-9 lg:py-10">
    <article className="prose mx-auto">
      <Markdown options={{ ... }}>{markdown}</Markdown>
    </article>
  </Wrap>

  {/* Tags + share + related — restyled with editorial primitives */}
</>
```

**Critical preservation:**
- `markdown-to-jsx` rendering (preserve all options including overrides)
- `next-share` social share buttons (preserve target URLs)
- Related-posts logic (preserve `GetBlogPostMetadata` + filtering)
- All metadata + JSON-LD + canonical URLs

- [ ] **Step 3:** TypeScript clean. Visual check via dev server on at least one post. Commit:
```
git add src/app/blog/posts/[slug]/page.tsx
git commit -m "feat(redesign): rebuild blog post page with editorial chrome"
```

---

## Phase 2 final validation

After all 7 page tasks land:

- [ ] `npx tsc --noEmit` — zero errors
- [ ] `npm run lint` — clean
- [ ] `npm run dev` — open each route, walk through visually:
  - `/services` — hero + numbered service rows + closing CTA
  - `/skills` — hero + Skills component + closing CTA
  - `/timeline` — hero + Timeline + stats + closing CTA
  - `/projects` — hero + Projects + tech badges + closing CTA
  - `/contact` — hero + 2-col contact + form + Disclosure FAQ
  - `/blog` — hero + article index
  - `/blog/posts/[slug]` (open one) — navy hero + prose body + tags/share/related
- [ ] No console errors. Mobile responsive. No rogue gradient/dark-mode flashes.

## Self-review

- All 7 pages covered ✓
- No placeholders — every code block contains real or clearly-instructed code with field-name caveats explicit ✓
- Type names (`Hero`, `Wrap`, `SectionHeader`, `Disclosure`, `MetaStrip`, `MetaItem`) consistent with Phase 1 kit ✓

## Phase 3 preview (next plan, after Phase 2 lands)

- `npm uninstall @tsparticles/engine @tsparticles/react @tsparticles/slim react-type-animation @nextui-org/accordion @nextui-org/divider`
- Delete: `MoveingParticles.tsx`, `ThemeProvider.tsx`, `ThemeToggle.tsx`, `HeroSection.tsx`, `Container.tsx`, old `Navigation.tsx`, old `Footer.tsx`, `SayHi.tsx`, `Tools.tsx` (if unused), `OtherSkills.tsx` (if unused), `layout_new.tsx`
- Optimize `public/logo.png` (re-export under 200 KB, ideally SVG)
- Strip stale `color`/`rating`/`project` fields from `Testimonials.tsx`
- Remove pre-existing merge artifact from branch history (optional, requires rebase)
- Final PR for merge to `main`
