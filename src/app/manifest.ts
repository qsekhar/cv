import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Subhra Sekhar | Full Stack Web Developer & Tech Consultant",
    short_name: "Subhra Sekhar",
    description:
      "Subhra Sekhar Mukherjee — full-stack engineer building modern web applications, APIs, and digital products for startups and growing businesses.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#F7F3EC",
    theme_color: "#12263A",
    id: "/?source=pwa",
    scope: "/",
    icons: [
      { src: "/icon.png", sizes: "32x32", type: "image/png" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
