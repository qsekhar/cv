/**
 * Loads a Google Font binary at edge runtime so it can be passed to
 * `next/og` ImageResponse as a font source.
 *
 * Returns the raw font ArrayBuffer for the requested family + weight.
 * Pass the `text` that will appear in the rendered image to keep the
 * subset small (Google returns only the glyphs it needs).
 */
export async function loadGoogleFont(
  family: string,
  text: string,
  weight = 500,
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(
    / /g,
    "+",
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;

  const css = await (
    await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
      },
    })
  ).text();

  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype|woff2)'\)/);
  if (!match) throw new Error(`Failed to find font URL for ${family} ${weight}`);

  const fontRes = await fetch(match[1]);
  if (!fontRes.ok) throw new Error(`Failed to fetch font binary for ${family} ${weight}`);
  return await fontRes.arrayBuffer();
}
