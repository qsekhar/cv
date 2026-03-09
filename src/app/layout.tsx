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

const url = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://www.subhrasekhar.in';
const siteTitle = "Subhra Sekhar | Freelance Full Stack Developer — React, Next.js, Node.js";
const siteDescription = "Hire Subhra Sekhar Mukherjee — freelance full stack developer with 13+ years of experience building web apps, APIs, SaaS, and e-commerce. Based in Kolkata, India. Available for remote projects worldwide. Free consultation.";
const ogImage = `${url}/opengraph-image.png`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Subhra Sekhar Mukherjee",
  "url": "https://www.subhrasekhar.in/",
  "image": ogImage,
  "sameAs": [
    "https://www.linkedin.com/in/subhra-sekhar-mukherjee",
    "https://github.com/qsekhar"
  ],
  "jobTitle": "Freelance Full Stack Web Developer & Tech Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "description": siteDescription,
  "knowsAbout": ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "qsekhar@gmail.com",
    "availableLanguage": "English"
  },
  "offers": {
    "@type": "Offer",
    "name": "Free Initial Consultation",
    "description": "Free 30-minute consultation for new freelance web development and tech consulting projects.",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366F1"
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  applicationName: siteTitle,
  title: {
    default: siteTitle,
    template: "%s | Subhra Sekhar — Freelance Full Stack Developer"
  },
  description: siteDescription,
  keywords: [
    "freelance full stack developer",
    "hire full stack developer India",
    "React developer for hire",
    "Next.js developer freelance",
    "Node.js developer",
    "web app development",
    "tech consultant India",
    "Kolkata web developer",
    "remote full stack developer",
    "SaaS developer",
    "API developer",
    "Subhra Sekhar Mukherjee"
  ],
  authors: [{ name: "Subhra Sekhar Mukherjee", url: "https://www.subhrasekhar.in" }],
  creator: "Subhra Sekhar Mukherjee",
  publisher: "Subhra Sekhar Mukherjee",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: url,
    siteName: "Subhra Sekhar — Freelance Full Stack Developer",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Subhra Sekhar Mukherjee — Freelance Full Stack Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
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
