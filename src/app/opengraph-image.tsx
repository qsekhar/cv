import { ImageResponse } from "next/og";
import { loadGoogleFont } from "./components/utils/og-fonts";

export const runtime = "edge";

export const alt = "Subhra Sekhar — Full Stack Developer & Tech Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TITLE = "Subhra Sekhar.";
const LEDE =
  "An editorial, engineering-first practice. Full-stack work for teams that care about clarity, calm interfaces, and software that behaves well in the wild.";
const KICKER = "PRACTICE · v1.0";
const FOOTER_LEFT = "SSM · MMVI · KOLKATA";
const FOOTER_RIGHT = "subhrasekhar.in";

export default async function Image() {
  const [serif, mono, sans] = await Promise.all([
    loadGoogleFont("Fraunces", TITLE, 500),
    loadGoogleFont("JetBrains Mono", `${KICKER}${FOOTER_LEFT}${FOOTER_RIGHT}`, 500),
    loadGoogleFont("Inter", LEDE, 400),
  ]);

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
            fontSize: 132,
            fontWeight: 500,
            letterSpacing: -2,
            lineHeight: 1,
            color: "#F7F3EC",
          }}
        >
          {TITLE}
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontSize: 26,
            lineHeight: 1.5,
            color: "rgba(247,243,236,0.8)",
            marginTop: 40,
            maxWidth: 880,
          }}
        >
          {LEDE}
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
      fonts: [
        { name: "Fraunces", data: serif, style: "normal", weight: 500 },
        { name: "Inter", data: sans, style: "normal", weight: 400 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 500 },
      ],
      headers: { "cache-control": "public, max-age=31536000, immutable" },
    },
  );
}
