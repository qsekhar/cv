/**
 * Loads a Google Font binary at edge runtime so it can be passed to
 * `next/og` ImageResponse as a font source.
 *
 * Satori (the engine behind ImageResponse) accepts only TTF / OTF —
 * NOT WOFF or WOFF2. The Google Fonts v2 endpoint (`/css2`) returns
 * WOFF2 by default. The v1 endpoint (`/css`) returns TTF when the
 * client doesn't advertise WOFF2 support — we send a Wget UA which
 * Google treats as legacy and serves TTF.
 */
export async function loadGoogleFont(
  family: string,
  text: string,
  weight = 500,
): Promise<ArrayBuffer> {
  const familyParam = family.replace(/ /g, "+");
  const url = `https://fonts.googleapis.com/css?family=${familyParam}:${weight}&text=${encodeURIComponent(text)}`;

  // Wget UA → Google returns TTF (not WOFF2). Empty UA can be rejected by
  // some edge networks, so we send something distinct but legacy.
  const cssRes = await fetch(url, {
    headers: { "User-Agent": "Wget/1.21" },
  });
  if (!cssRes.ok) {
    throw new Error(
      `og-fonts: CSS fetch failed for ${family} ${weight} (${cssRes.status})`,
    );
  }
  const css = await cssRes.text();

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

/**
 * Returns the font ArrayBuffer or `null` if any step fails. Use this
 * when you want the OG image to still render with a system fallback
 * even if Google Fonts is unreachable from the edge.
 */
export async function tryLoadGoogleFont(
  family: string,
  text: string,
  weight = 500,
): Promise<ArrayBuffer | null> {
  try {
    return await loadGoogleFont(family, text, weight);
  } catch (err) {
    console.error(`[og-fonts] ${family} ${weight} fallback to system:`, err);
    return null;
  }
}
