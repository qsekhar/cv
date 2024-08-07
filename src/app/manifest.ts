import { MetadataRoute } from "next";

type IconType = {
    src: string;
    type?: string | undefined;
    sizes?: string | undefined;
    purpose?: "maskable" | "any" | "monochrome" | "badge" | undefined;
};

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

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Full Stack Developer | Front & Back-End Expert",
        short_name: "Subhra Sekhar Mukherjee",
        description:
            "Expert Full Stack Developer: Python, PHP, Vue, React, Node.js. Creating responsive, user-friendly web apps with innovative design and clean code for scalable applications.",
        start_url: "/",
        display: "browser",
        background_color: "white",
        theme_color: "#6366F1",
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
