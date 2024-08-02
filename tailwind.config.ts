const colors = require('tailwindcss/colors')
import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors.indigo[500],
        lightbackground: colors.slate[100],
        darkbackground: colors.slate[900],
        darktext: colors.slate[200],
        lighttext: colors.slate[700],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
