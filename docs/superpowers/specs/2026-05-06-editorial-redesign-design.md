# Editorial Redesign — Design Spec

**Date:** 2026-05-06
**Project:** next-ssm-port (subhrasekhar.in)
**Topic:** Full visual redesign + structural cleanup to the editorial brand system

---

## Goal

Replace the current dark/gradient SaaS-style portfolio with the editorial, engineering-first identity defined in `docs/Style Guide.html`, `docs/tokens.ts`, and `docs/tailwind.config.ts`. Keep all existing pages and content. Restructure section layouts where the current pattern fights the editorial style. Preserve all working features (contact form, blog, SEO, GA, sitemap).

## Decisions locked

| # | Decision | Choice |
|---|---|---|
| 1 | Scope | Reskin + structural cleanup (no full content rewrite) |
| 2 | Motion / effects | Strip all — drop tsparticles + react-type-animation. Keep only subtle scroll-fade reveals via existing `FadeInWhenVisible`. |
| 3 | Dark mode | Drop entirely. Light only. Navy used as a dark surface within the light layout. |
| 4 | Copy | Light surgical edits to headlines and CTAs. Body content untouched. |
| 5 | Implementation strategy | Vertical slice first (foundation → kit → home) then propagate per page. |
| 6 | Fonts | Loaded via Google Fonts `<link>` in `<head>`, not `next/font/google`. |

---

## Brand system (source of truth: `docs/`)

**Colors** — navy `#12263A`, ink `#0E1A28`, paper `#F7F3EC`, paper-2 `#EFE9DE`, line `#C9BFAE`, muted `#6B6456`, accent `#B8895A`. Status: danger / warn / success.

**Typography** — Fraunces (serif display), Inter (sans body), JetBrains Mono (technical labels). Type scale Display 64 / H1 44 / H2 30 / H3 18 / body 15 / small 13.5 / caption 12 / micro 11.

**Layout** — `max-width: 1100px`. 48px desktop gutters / 24px mobile. 4px spacing base.

**Surfaces** — square corners (`border-radius: 0`) with one `pill` exception. Hairline 1px `line` borders. No drop shadows except `popup` and `modal` elevations from tokens.

**Voice** — editorial publication, not SaaS landing page. Mono labels carry technical signal (`§04`, `Section 04 · Typography`, `SSM-2026-014`).

---

## Foundation layer

### Files

- **Add** `src/styles/tokens.ts` — copy of `docs/tokens.ts` (single source of truth)
- **Replace** `tailwind.config.ts` — adopt `docs/tailwind.config.ts` (wired to tokens, includes `.kicker`, `.hairline`, `.focus-ring` utilities)
- **Rewrite** `src/app/globals.css` — only Tailwind layers, smooth scroll, prose overrides for the new type system, editorial utilities. Remove all gradient classes, dark-mode rules, projectTab styles, gradient-text, btn-primary/secondary, custom scrollbar gradients.
- **Edit** `src/app/layout.tsx` — drop `MoveingParticles`, `ThemeProvider`, `inter` font import; add Google Fonts `<link>` + preconnects in `<head>`; body becomes `bg-paper text-ink font-sans antialiased`
- **Move** `docs/logo (1).png` → `public/logo.png`

### Fonts

In `<head>` of [src/app/layout.tsx](src/app/layout.tsx):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Inter:wght@300..700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Tailwind `fontFamily.sans/serif/mono` from tokens map to these families. No `next/font` usage.

### package.json

**Remove:**
- `@tsparticles/engine`
- `@tsparticles/react`
- `@tsparticles/slim`
- `react-type-animation`
- `@nextui-org/accordion`
- `@nextui-org/divider`

**Keep:** `framer-motion`, `markdown-to-jsx`, `gray-matter`, `next-share`, `nodemailer`, `react-recaptcha-v3`, `next/third-parties`, `react-icons`, `@tailwindcss/typography`.

---

## Component kit

New folder `src/app/components/editorial/` housing:

### Layout primitives

- **`Wrap`** — `max-w-[1100px] mx-auto px-6 lg:px-12`. Replaces `Container.tsx`.
- **`Hairline`** — 1px line in `border-line`. Section dividers and inline rules.
- **`SectionHeader`** — left: kicker (`Section 02`) over serif H2 title. Right: `§02` mono ref in accent. Bottom hairline.

### Type primitives

- **`Kicker`** — `font-mono uppercase tracking-[0.2em] text-[11px] text-muted`. Optional 36px tan accent rule prefix.
- **`Ref`** — mono inline reference, accent color, letter-spacing `.14em` (e.g. `§04 · SSM-2026-014`).
- **`MetaStrip`** — horizontal row of `lab/val` pairs (mono caption label, serif/sans value), separated by hairlines or fixed gaps. Used in Hero, project cards, timeline rows.

### Interactive primitives

- **`Button`** — square, `inline-flex items-center gap-2 px-5 py-3 font-sans font-medium text-[13.5px] tracking-[0.02em] border`. Variants: `primary` (navy bg, paper text), `default` (ink bg, paper text), `ghost` (transparent, ink border, ink text), `accent` (accent bg, white text). Hover: `opacity-85`.
- **`Badge`** — square, mono uppercase 10px, `px-2.5 py-1 border border-ink`.
- **`Disclosure`** — accessible native `<button aria-expanded>` + collapsible region. Mono `+` / `−` indicator. Hairline divider between rows. Replaces NextUI Accordion on `/contact` FAQ.

### Content surfaces

- **`Card`** — `bg-paper-2 border border-line p-6` square. Optional `accent` left border (3px tan) for emphasis variant.
- **`Hero`** — full-bleed `bg-navy text-paper`, 6px tan accent bottom rule, eyebrow kicker, serif H1, lede, MetaStrip. Replaces every `bg-gradient-to-br from-primary-50 …` hero.

### Site chrome

- **`Navigation`** — left: logo (`public/logo.png`, 32–40px) + serif wordmark "Subhra Sekhar.". Right: mono uppercase nav links (`HOME · WORK · WRITING · ABOUT · CONTACT`) separated by `·`. Bottom hairline. No theme toggle. Mobile: drawer with same treatment. Replaces current `Navigation.tsx`.
- **`Footer`** — three columns over a top hairline: contact (mono labels + sans values), nav, colophon (mono `SSM · MMVI · KOLKATA · ©2026`). No gradient. Replaces current `Footer.tsx`.

---

## Page-by-page treatment

All pages: keep existing routes, metadata, JSON-LD, canonical URLs, GA, sitemap entries.

### `/` Home — [src/app/page.tsx](src/app/page.tsx)

- **Hero** — navy. Eyebrow kicker, serif H1 ("Subhra Sekhar."), one-line lede, MetaStrip (Discipline · Based in · Available). Replaces `HeroSection.tsx` (drops particles + animated typing).
- **What I build** — `SectionHeader` + grid of square hairline cards. No gradient icon tiles, no per-service color theme.
- **Skills** — re-uses revised `<Skills />`, badges instead of pills.
- **From the journal** — drops bento-grid gradient feature post. Becomes editorial article list: 3 entries each with mono date kicker, serif title, lede, hairline below. Right-aligned `All articles →`.
- **Testimonials** — large serif open-quote, mono attribution, no card shadows.
- **Closing CTA** (replaces SayHi) — hairline-bordered closing block: serif H2 + accent rule + ghost Button (`Start a project.`) + mailto.

### `/services` — [src/app/services/page.tsx](src/app/services/page.tsx)

- Hero (navy)
- `SectionHeader` `§02 · Practice areas`
- Service entries become numbered editorial rows: `01 / 02 / 03 …` mono index, serif title + tagline, body lede, dashed-bullet feature list (`ul.clean` from style guide). Drops gradient backgrounds and per-service color theming. Uniform accent treatment.
- Closing CTA (no gradient)

### `/skills` — [src/app/skills/page.tsx](src/app/skills/page.tsx)

- Hero (navy)
- Each skill category: hairline-divided block with mono category label + skill `Badge` row. Drops emoji-icon gradient cards.

### `/timeline` — [src/app/timeline/page.tsx](src/app/timeline/page.tsx)

- Hero (navy)
- Vertical editorial list: each entry has mono year/range label, serif role title, organization line, body, hairline divider.
- Stats: gradient band → 4-column editorial `MetaStrip` below the timeline.

### `/projects` — [src/app/projects/page.tsx](src/app/projects/page.tsx)

- Hero (navy)
- Editorial case-study rows: mono project ID, serif title, MetaStrip (client · stack · year), body, link. Drops colored project tabs.
- "Technologies Used" → wall of mono badges, no per-tech color
- Closing CTA: editorial closing block (no gradient)

### `/contact` — [src/app/contact/page.tsx](src/app/contact/page.tsx)

- Hero (navy)
- Contact info: 2-column grid, hairline borders, mono labels (`EMAIL` · `WHATSAPP` · `LOCATION`), sans/serif values
- Form: paper-2 surface, square inputs `border-ink`, focus uses `accent` outline ring (`.focus-ring`), submit is the new square `Button`
- FAQ: `Disclosure` rows, hairline-divided. Drops NextUI accordion.

### `/blog` and `/blog/posts/[slug]`

> Verify exact file locations under `src/app/blog/**` before editing — these were not enumerated in the initial codebase scan.

- **List page** — editorial article index. Each entry is a hairline-divided row with mono date, serif title, lede, mono read-time, accent `Read →` ref.
- **Post page** — prose theme rebuilt: Fraunces H1/H2/H3, Inter body, JetBrains Mono inline + block code, accent links, hairline rules, max-width ~720px (style-guide reading column). Existing `markdown-to-jsx` rendering preserved; only prose CSS changes.
- Sidebar / share / related / nav — restyled with kit primitives.

---

## Copy edits (illustrative — full table in implementation)

Headlines and CTAs only. Body content untouched.

| Current | New |
|---|---|
| `My Projects` | `Selected work.` |
| `Technical Skills` | `Practice.` |
| `Professional Timeline` | `Timeline.` |
| `Ready to Start Your Next Project?` | `Start a project.` |
| `Get In Touch` | `Say hi.` |
| `Full-service development` | `Practice areas.` |
| `Latest Insights` | `From the journal.` |
| `Services I Offer` | `What I build.` |
| `Direct Contact` | `Direct.` |
| `Frequently Asked Questions` | `Questions.` |
| `Read` (post link) | `Read →` |

Page metadata `title` and `description` stay as-is to preserve SEO. Visible H1s are what changes.

---

## Removals (files / components no longer referenced)

After propagation, delete:

- `src/app/components/MoveingParticles.tsx`
- `src/app/components/ThemeProvider.tsx`
- `src/app/components/ThemeToggle.tsx`
- `src/app/components/HeroSection.tsx` (current — replaced by editorial Hero)
- `src/app/components/Container.tsx` (replaced by `Wrap`)
- `src/app/components/Tools.tsx` (verify unused before delete)
- `src/app/layout_new.tsx` (stale draft from prior work)
- Any per-service / per-category color maps inside Services, Skills, Projects components

Tailwind: remove `bg-lightbackground / dark:bg-darkbackground`, all `gradient-*` utilities, `darkMode: 'class'`.

---

## Implementation order

1. **Foundation** — tokens, tailwind config, fonts link, globals.css, layout.tsx (drop ThemeProvider + MoveingParticles), package.json removals. Site temporarily looks broken — expected and acceptable.
2. **Editorial kit** — build `src/app/components/editorial/*` primitives. Not yet wired into pages.
3. **Site chrome** — new `Navigation`, `Footer`. Visible mismatch between chrome and page interiors — expected.
4. **Home (vertical slice)** — rebuild `/` end-to-end. **User reviews live.** Iterate. Locks the patterns.
5. **Page propagation** (one focused commit per page in this order):
   `/services` → `/skills` → `/projects` → `/timeline` → `/contact` → `/blog` (list) → `/blog/posts/[slug]`
6. **Cleanup** — delete dead components, prune unused tailwind classes, run `next build`, check no console warnings, verify all routes still respond, sitemap intact.

---

## Constraints / non-goals

- Routes do not change. Existing URLs preserved.
- SEO metadata, canonical URLs, JSON-LD, sitemap, GA, Open Graph image generation: unchanged.
- Markdown blog post source files in `src/posts/*.md`: untouched.
- Contact form backend (`/api/mail`, nodemailer, recaptcha): untouched.
- No new pages. No removed pages.
- No dark mode. No theme toggle.
- No animated background. No typed/typing headline.

## Risks

- **Tailwind class breakage** — removing `dark:`, `from-primary-X`, `bg-gradient-*`, `rounded-2xl`, etc. wholesale will break every page until pages are rebuilt with the kit. Mitigated by step ordering: foundation lands, kit lands, then each page rebuilt page-by-page in a single branch.
- **Prose theme** — rebuilding the typography plugin's prose styles for Fraunces/Inter/JetBrains Mono is the most fiddly piece. Allocate review time on the first blog post page render.
- **Logo asset** — `docs/logo (1).png` is 2.4MB. Re-export to a smaller PNG/SVG before shipping, or run through `sharp` for a 200KB version. Add this to the cleanup step.
