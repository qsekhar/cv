/**
 * Loads a Google Font binary at edge runtime so it can be passed to
 * `next/og` ImageResponse as a font source.
 *
 * Satori (the engine behind ImageResponse) accepts only TTF / OTF —
 * NOT WOFF or WOFF2. The Google Fonts v2 endpoint (`/css2`) returns
 * WOFF2 by default. The v1 endpoint (`/css`) returns TTF when the
 * client doesn't advertise WOFF2 support, which is what we want.
 *
 * Pass the `text` that will appear in the rendered image so Google
 * returns only the glyphs needed (smaller payload, faster cold start).
 */
export async function loadGoogleFont(
  family: string,
  text: string,
  weight = 500,
): Promise<ArrayBuffer> {
  const familyParam = family.replace(/ /g, "+");
  // v1 endpoint + empty UA → TTF response
  const url = `https://fonts.googleapis.com/css?family=${familyParam}:${weight}&text=${encodeURIComponent(text)}`;

  const css = await (
    await fetch(url, { headers: { "User-Agent": "" } })
  ).text();

  const match = css.match(
    /src:\s*url\((https?:[^)]+)\)\s*format\(['"](?:opentype|truetype)['"]\)/,
  );
  if (!match) {
    throw new Error(
      `og-fonts: no TTF/OTF URL found for ${family} ${weight}. CSS head: ${css.slice(
        0,
        300,
      )}`,
    );
  }

  const fontRes = await fetch(match[1]);
  if (!fontRes.ok) {
    throw new Error(
      `og-fonts: font binary fetch failed for ${family} ${weight} (${fontRes.status})`,
    );
  }
  return await fontRes.arrayBuffer();
}
