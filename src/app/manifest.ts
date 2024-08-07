import { MetadataRoute } from "next";

type IconType = {
    src: string;
    type?: string | undefined;
    sizes?: string | undefined;
    purpose?: "maskable" | "any" | "monochrome" | "badge" | undefined;
};

type ScreenshotType = {
    src: string;
    sizes: string;
    type: string;
    form_factor: string;
}

type CustomManifest = MetadataRoute.Manifest & {
  screenshots: Array<ScreenshotType>;
}

const sizesForAndriod = [72, 96, 128, 144, 152, 192, 384, 512];
const sizesForIos = [57, 60, 72, 76, 114, 120, 144, 152, 167, 180, 1024];

const androidIcons: IconType[] = sizesForAndriod.map((size) => ({
    src: `/icon/android-chrome-${size}x${size}.png`,
    sizes: `${size}x${size}`,
    type: "image/png",
    purpose: "any",
}));

const iosIcons: IconType[] = sizesForIos.map((size) => ({
    src: `/apple-icon/apple-touch-icon-${size}x${size}.png`,
    sizes: `${size}x${size}`,
    type: "image/png",
    purpose: "any",
}));

export default function manifest(): CustomManifest {
    return {
        name: "Full Stack Developer | Front & Back-End Expert",
        short_name: "Subhra Sekhar Mukherjee",
        description:
            "Expert Full Stack Developer: Python, PHP, Vue, React, Node.js. Creating responsive, user-friendly web apps with innovative design and clean code for scalable applications.",
        start_url: "/",
        display: "minimal-ui",
        display_override: ["window-controls-overlay"],
        background_color: "white",
        theme_color: "#6366F1",
        id: "/?source=pwa",
        scope: "/",
        screenshots: [
            {
                src: "/screenshots/Full-Stack-Developer-Front-Back-End-Expert-min.png",
                sizes: "1920x951",
                type: "image/png",
                form_factor: "wide"

            },
            {
                src: "/screenshots/Full-Stack-Developer-Front-Back-End-Expert-Mobile-min.png",
                sizes: "396x857",
                type: "image/png",
                form_factor: "narrow"
            },
        ],
        icons: [
            {
                src: "/favicon.ico",
                sizes: "32x32",
                type: "image/x-icon",
            },
            ...androidIcons,
            ...iosIcons,
        ],
    };
}
