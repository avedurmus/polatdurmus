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
                    DEFAULT: "#0f172a", // Slate 900
                    foreground: "#f8fafc", // Slate 50
                },
                secondary: {
                    DEFAULT: "#94a3b8", // Slate 400
                    foreground: "#0f172a", // Slate 900
                },
                accent: {
                    DEFAULT: "#c0a062", // Gold-ish
                    foreground: "#0f172a",
                }
            },
            fontFamily: {
                serif: ['var(--font-geist-mono)', 'serif'], // Placeholder, we might want a real serif font later
                sans: ['var(--font-geist-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
