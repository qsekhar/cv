import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import dynamic from "next/dynamic";

const gaID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
const MoveingParticles = dynamic(() => import("./components/MoveingParticles"));
const Container = dynamic(() => import("./components/Container"));

const url = process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000';
const title = "Full Stack Developer | Front & Back-End Expert"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366F1"
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  applicationName: title,
  title: title,
  description: "Expert Full Stack Developer: Python, PHP, Vue, React, Node.js. Creating responsive, user-friendly web apps with innovative design and clean code for scalable applications.",
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
      </body>
      { process.env.NODE_ENV === 'production' && (
        <>
          <GoogleAnalytics gaId={gaID} />
        </>
      )}
    </html>
  );
}
