// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import { generateCanonicalMetadata } from "./components/utils/CanonicalUrl";
import { seoTitle, seoDescription } from "./components/utils/seo";

const Navigation = dynamic(() => import("./components/editorial/Navigation"));
const Footer = dynamic(() => import("./components/editorial/Footer"));
const AnalyticsClicks = dynamic(() => import("./components/AnalyticsClicks"));

const gaID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
const url = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://www.subhrasekhar.in";

// Short tab title — clamped to ≤60 chars for SERPs.
const tabTitle = "Subhra Sekhar — Full Stack Developer & Tech Consultant";
// Richer descriptive title — used for OG / Twitter / page-less fallback.
const ogTitle = "Subhra Sekhar | Freelance Full Stack Developer — React, Next.js, Node.js";
const metaDescription =
  "Hire Subhra Sekhar Mukherjee — full-stack developer and tech consultant with 13+ years of experience.";

export const metadata: Metadata = {
  title: { default: seoTitle(tabTitle), template: "%s | Subhra Sekhar" },
  description: seoDescription(metaDescription),
  metadataBase: new URL(url),
  openGraph: {
    title: ogTitle,
    description: seoDescription(metaDescription, 200),
    url,
    siteName: "Subhra Sekhar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle(tabTitle, "Subhra Sekhar", 70),
    description: seoDescription(metaDescription, 200),
  },
  ...generateCanonicalMetadata(),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F3EC",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Subhra Sekhar Mukherjee",
  url,
  jobTitle: "Full Stack Developer & Tech Consultant",
  email: "iam@subhrasekhar.in",
  knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "iam@subhrasekhar.in",
    availableLanguage: "English",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..700&family=Inter:wght@300..700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="bg-paper text-ink font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          id="structured-data"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={gaID} />}
        <AnalyticsClicks />
      </body>
    </html>
  );
}
