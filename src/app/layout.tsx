import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import dynamic from "next/dynamic";
import Script from "next/script";
import { Inter } from "next/font/google";
import { generateCanonicalMetadata } from "./components/utils/CanonicalUrl";

const inter = Inter({ subsets: ["latin"] });

const gaID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
const MoveingParticles = dynamic(() => import("./components/MoveingParticles"));
const Container = dynamic(() => import("./components/Container"));
const Navigation = dynamic(() => import("./components/Navigation"));
const Footer = dynamic(() => import("./components/Footer"));
const ThemeProvider = dynamic(() => import("./components/ThemeProvider").then(mod => ({ default: mod.ThemeProvider })));

const url = process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000';
const title = "Subhra Sekhar | Full Stack Web Developer & Tech Consultant"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Subhra Sekhar Mukherjee",
  "url": "https://www.subhrasekhar.in/",
  "image": "https://www.subhrasekhar.in/opengraph-image?"+ Date.now(),
  "sameAs": [
    "https://www.linkedin.com/in/subhra-sekhar-mukherjee",
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
  description: "Hi, I'm Subhra Sekhar – a full-stack web developer specializing in building modern websites, apps, and scalable digital solutions for startups, businesses, and agencies.",
  ...generateCanonicalMetadata()
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldBeDark = theme === 'dark' || (!theme && systemPrefersDark);
                
                if (shouldBeDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-lightbackground dark:bg-darkbackground text-lighttext dark:text-darktext`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            <Container>
              {children}
            </Container>
          </main>
          <Footer />
        </ThemeProvider>
        <Script
          id="structured-data"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId={gaID} />
        )}
      </body>
    </html>
  );
}
