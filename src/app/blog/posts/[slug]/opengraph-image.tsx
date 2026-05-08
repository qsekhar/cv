import { ImageResponse } from "next/og";
import { tryLoadGoogleFont } from "../../../components/utils/og-fonts";

export const runtime = "edge";

export const alt = "Subhra Sekhar — Journal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const KICKER = "JOURNAL · SUBHRA SEKHAR";
const FOOTER_LEFT = "BY SUBHRA SEKHAR MUKHERJEE";
const FOOTER_RIGHT = "subhrasekhar.in/blog";

export default async function Image({ params }: { params: { slug: string } }) {
  const title = slugToTitle(params.slug);
  const displayTitle = title.length > 90 ? title.substring(0, 87) + "…" : title;

  const [serif, mono, sans] = await Promise.all([
    tryLoadGoogleFont("Fraunces", displayTitle, 500),
    tryLoadGoogleFont("JetBrains Mono", `${KICKER}${FOOTER_LEFT}${FOOTER_RIGHT}`, 500),
    tryLoadGoogleFont("Inter", "An article from the Subhra Sekhar journal.", 400),
  ]);

  const fonts = [
    serif && { name: "Fraunces" as const, data: serif, style: "normal" as const, weight: 500 as const },
    sans && { name: "Inter" as const, data: sans, style: "normal" as const, weight: 400 as const },
    mono && { name: "JetBrains Mono" as const, data: mono, style: "normal" as const, weight: 500 as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; style: "normal"; weight: 400 | 500 }[];

  // Scale title size by length so long titles still fit
  const titleSize = displayTitle.length > 70 ? 60 : displayTitle.length > 40 ? 78 : 96;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#12263A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          color: "#F7F3EC",
          position: "relative",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#B8895A",
          }}
        />

        <div
          style={{
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#B8895A",
            marginBottom: 32,
          }}
        >
          {KICKER}
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: titleSize,
            fontWeight: 500,
            letterSpacing: -1.5,
            lineHeight: 1.05,
            color: "#F7F3EC",
            maxWidth: 1040,
          }}
        >
          {displayTitle}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(247,243,236,0.18)",
            fontFamily: "JetBrains Mono",
            fontSize: 16,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(247,243,236,0.6)",
          }}
        >
          <span>{FOOTER_LEFT}</span>
          <span style={{ color: "#B8895A" }}>{FOOTER_RIGHT}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
  );
}
