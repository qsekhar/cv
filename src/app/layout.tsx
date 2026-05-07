// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import { generateCanonicalMetadata } from "./components/utils/CanonicalUrl";

const Navigation = dynamic(() => import("./components/editorial/Navigation"));
const Footer = dynamic(() => import("./components/editorial/Footer"));

const gaID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
const url = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://www.subhrasekhar.in";
const siteTitle = "Subhra Sekhar | Freelance Full Stack Developer — React, Next.js, Node.js";
const siteDescription =
  "Hire Subhra Sekhar Mukherjee — full-stack developer and tech consultant with 13+ years of experience.";

export const metadata: Metadata = {
  title: { default: siteTitle, template: "%s | Subhra Sekhar" },
  description: siteDescription,
  metadataBase: new URL(url),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url,
    siteName: "Subhra Sekhar",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription },
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
  email: "qsekhar@gmail.com",
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
    email: "qsekhar@gmail.com",
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
      </body>
    </html>
  );
}
