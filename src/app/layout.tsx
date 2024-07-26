import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Web Developer | Expert in Front-End & Back-End Development",
  description: "Welcome to my professional portfolio! I am a seasoned Full Stack Web Developer specializing in front-end and back-end development. With a strong command of Pyhon, PHP, JavaScript, React, Node.js, and other modern technologies, I create dynamic, responsive, and user-friendly web applications. Browse my projects to discover how I deliver high-quality code, innovative design, and seamless functionality. Let's work together to enhance your online presence and build powerful digital solutions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
