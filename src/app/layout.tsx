import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import dynamic from "next/dynamic";

const gaID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
const MoveingParticles = dynamic(() => import("./components/MoveingParticles"));
const Container = dynamic(() => import("./components/Container"));

export const metadata: Metadata = {
  title: "Full Stack Developer | Front & Back-End Expert",
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
          <MoveingParticles />
          <Container>
            {children}
          </Container>
        </main>  
      </body>
      <GoogleAnalytics gaId={gaID} />
    </html>
  );
}
