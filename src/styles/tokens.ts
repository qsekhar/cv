/**
 * Subhra Sekhar — Design Tokens
 * v1.0 · May 2026
 *
 * Single source of truth. Mirror these in tailwind.config.ts.
 * Re-export as CSS custom properties via the `cssVars` helper at the bottom.
 */

// ─────────────────────────────────────────────
// COLOR
// ─────────────────────────────────────────────
export const color = {
  navy:    '#12263A', // Primary surface · headings on paper
  navy2:   '#1B3553', // Hover · alt navy surface
  ink:     '#0E1A28', // Body text · borders
  paper:   '#F7F3EC', // Page background
  paper2:  '#EFE9DE', // Card surface
  line:    '#C9BFAE', // Hairlines · dividers
  muted:   '#6B6456', // Captions · meta · labels
  accent:  '#B8895A', // Kickers · § marks · rules

  // Semantic — paired off canonical hues, never new ones
  fg:           '#0E1A28', // ink
  fgMuted:      '#6B6456', // muted
  fgInverse:    '#F7F3EC', // paper on navy
  bg:           '#F7F3EC', // paper
  bgSubtle:     '#EFE9DE', // paper2
  bgInverse:    '#12263A', // navy
  border:       '#C9BFAE', // line
  borderStrong: '#0E1A28', // ink
  focus:        '#B8895A', // accent

  // Status (use weight + label first; only fall back to these when meaning demands it)
  danger:  '#A04444',
  warn:    '#B88A3A',
  success: '#3F6B4F',
} as const;

// ─────────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────────
export const fontFamily = {
  serif: '"Fraunces", ui-serif, Georgia, serif',
  sans:  '"Inter", ui-sans-serif, system-ui, sans-serif',
  mono:  '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
} as const;

export const fontWeight = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
} as const;

// All sizes in px. Use rem at consumption time if you prefer.
export const fontSize = {
  display: 64,
  h1:      44,
  h2:      30,
  h3:      18,
  body:    15,
  small:   13.5,
  caption: 12,
  micro:   11,
} as const;

export const lineHeight = {
  display: 1.0,
  h1:      1.05,
  h2:      1.1,
  h3:      1.2,
  body:    1.6,
  tight:   1.15,
} as const;

export const letterSpacing = {
  display:  '-0.02em',
  heading:  '-0.015em',
  body:     '0em',
  kicker:   '0.20em',  // mono uppercase
  label:    '0.16em',  // mono uppercase, slightly tighter
  ref:      '0.14em',  // mono inline references (§04, SSM-…)
} as const;

// ─────────────────────────────────────────────
// SPACING (4px base)
// ─────────────────────────────────────────────
export const space = {
  0:   0,
  1:   4,
  2:   8,
  3:   12,
  4:   18,
  5:   24,
  6:   32,
  7:   48,
  8:   64,
  9:   96,
  10:  128,
} as const;

// ─────────────────────────────────────────────
// LAYOUT
// ─────────────────────────────────────────────
export const breakpoint = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
} as const;

export const container = {
  max: 1100,         // matches style-guide wrap
  gutterDesktop: 48,
  gutterMobile:  24,
} as const;

// ─────────────────────────────────────────────
// BORDERS · RADIUS · ELEVATION
// ─────────────────────────────────────────────
export const borderWidth = {
  hairline: 1,
  accent:   2,
  strong:   3,
} as const;

// System is square-corner. Use these only for media (avatars, never UI chrome).
export const radius = {
  none: 0,
  pill: 9999,
} as const;

// No drop shadows on UI. These are reserved for floating overlays only.
export const elevation = {
  none:   'none',
  popup:  '0 8px 24px rgba(14, 26, 40, 0.12)',
  modal:  '0 20px 60px rgba(14, 26, 40, 0.25)',
} as const;

// ─────────────────────────────────────────────
// MOTION
// ─────────────────────────────────────────────
export const duration = {
  micro: 120,
  ui:    200,
  page:  320,
} as const;

export const easing = {
  standard: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  in:       'cubic-bezier(0.4, 0.0, 1, 1)',
  out:      'cubic-bezier(0.0, 0.0, 0.2, 1)',
} as const;

// ─────────────────────────────────────────────
// Z-INDEX
// ─────────────────────────────────────────────
export const z = {
  base:    0,
  raised:  10,
  sticky:  100,
  overlay: 1000,
  modal:   1100,
  toast:   1200,
} as const;

// ─────────────────────────────────────────────
// CSS VARIABLE EXPORT
// Inject into :root — read from CSS or JS interchangeably.
// ─────────────────────────────────────────────
export const cssVars = {
  '--color-navy':    color.navy,
  '--color-navy-2':  color.navy2,
  '--color-ink':     color.ink,
  '--color-paper':   color.paper,
  '--color-paper-2': color.paper2,
  '--color-line':    color.line,
  '--color-muted':   color.muted,
  '--color-accent':  color.accent,

  '--font-serif': fontFamily.serif,
  '--font-sans':  fontFamily.sans,
  '--font-mono':  fontFamily.mono,
} as const;

export type Token = typeof color & typeof space & typeof fontSize;
