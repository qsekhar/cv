/**
 * SEO helpers for clamping title tags and meta descriptions to the
 * lengths search engines actually display.
 *
 * Targets:
 *   - <title>: 50–60 chars (~600 px). Anything longer gets clipped in SERPs.
 *   - <meta name="description">: 150–160 chars. Mobile clips earlier.
 *
 * Keep the OG/Twitter title separate — those allow ~90 chars and
 * benefit from the full descriptive title.
 */

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;
const ELLIPSIS = "…";

/**
 * Build a Google-friendly <title> tag:
 *   - "Post title | Brand" when both fit in TITLE_MAX
 *   - Just "Post title" when adding the brand would overflow
 *   - Truncated at the last word boundary with an ellipsis when even the
 *     bare post title is over TITLE_MAX
 */
export function seoTitle(
  postTitle: string,
  brand = "Subhra Sekhar",
  max = TITLE_MAX,
): string {
  const suffix = ` | ${brand}`;
  const withBrand = `${postTitle}${suffix}`;
  if (withBrand.length <= max) return withBrand;
  if (postTitle.length <= max) return postTitle;
  return truncateAtWord(postTitle, max - ELLIPSIS.length) + ELLIPSIS;
}

/**
 * Clamp meta descriptions to ~160 chars, preferring word boundaries.
 * Returns the input unchanged if already short enough.
 */
export function seoDescription(
  text: string,
  max = DESCRIPTION_MAX,
): string {
  if (!text) return "";
  const trimmed = text.trim().replace(/\s+/g, " ");
  if (trimmed.length <= max) return trimmed;
  return truncateAtWord(trimmed, max - ELLIPSIS.length) + ELLIPSIS;
}

/**
 * Truncate `text` to at most `max` characters, breaking at the last
 * whitespace before the limit when possible. Falls back to a hard cut
 * if there's no nearby word boundary.
 */
function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const sliced = text.slice(0, max);
  const lastSpace = sliced.lastIndexOf(" ");
  // Only respect the word boundary if it isn't unreasonably early
  if (lastSpace > max * 0.6) return sliced.slice(0, lastSpace).trimEnd();
  return sliced.trimEnd();
}
