/**
 * Subhra Sekhar — Tailwind Config
 * v1.0 · May 2026
 *
 * Wired to ./tokens.ts. Keep both in sync.
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
} from './tokens';

// Tailwind expects strings; convert numeric tokens.
const px = (n: number) => `${n}px`;
const spacing = Object.fromEntries(
  Object.entries(space).map(([k, v]) => [k, px(v)])
) as Record<string, string>;

export default {
  content: ['./src/**/*.{ts,tsx,js,jsx,html}'],
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
    extend: {
      // Reusable component recipes via @apply if you prefer plugin form.
    },
  },
  plugins: [
    // Optional: a small plugin to register utility shortcuts.
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
