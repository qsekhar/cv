import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Web Developer | Expert in Front-End & Back-End Development",
  description: "Welcome to my portfolio! I am a skilled Full Stack Web Developer with expertise in both front-end and back-end development. Specializing in Pyhon, PHP, Vue, React, Node.js, and more, I create dynamic, responsive, and user-friendly web applications. My work emphasizes clean code, innovative design, and seamless functionality. Explore my projects to see how I deliver robust and scalable solutions tailored to enhance your online presence. Let's collaborate to bring your digital vision to life with high-quality, effective, and cutting-edge web development.",
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
