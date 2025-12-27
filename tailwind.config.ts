import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#0B1120", // Deepest Navy
                    foreground: "#f8fafc",
                },
                secondary: {
                    DEFAULT: "#334155", // Slate 700
                    foreground: "#f8fafc",
                },
                accent: {
                    DEFAULT: "#C5A065", // Muted Gold / Bronze
                    dark: "#9E7F48",
                    light: "#E5C585",
                    foreground: "#0f172a",
                }
            },
            fontFamily: {
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-geist-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
