import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import dynamic from "next/dynamic";
import Script from "next/script";

const gaID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
const MoveingParticles = dynamic(() => import("./components/MoveingParticles"));
const Container = dynamic(() => import("./components/Container"));

const url = process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000';
const title = "Subhra Sekhar | Full Stack Web Developer & Tech Consultant"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Subhra Sekhar Mukherjee",
  "url": "https://www.subhrasekhar.in/",
  "image": "https://www.subhrasekhar.in/opengraph-image?"+ Date.now(),  // Replace your image URL
  "sameAs": [
    "https://www.linkedin.com/in/subhra-sekhar-mukherjee",  // update with real links
    "https://github.com/qsekhar"
  ],
  "jobTitle": "Full Stack Web Developer & Tech Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "description": "A full-stack web developer specializing in building modern websites, apps, and scalable digital solutions for startups, businesses, and agencies.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "India",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366F1"
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  applicationName: title,
  title: title,
  description: "Hi, I’m Subhra Sekhar – a full-stack web developer specializing in building modern websites, apps, and scalable digital solutions for startups, businesses, and agencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen dark:bg-darkbackground">

          <Container>
            {children}
          </Container>
        </main>
        <Script
          id="json-ld"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
      { process.env.NODE_ENV === 'production' && (
        <>
          <GoogleAnalytics gaId={gaID} />
        </>
      )}
    </html>
  );
}
