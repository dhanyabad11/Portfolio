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
                accent: {
                    50: "#f1f5f9",
                    100: "#e2e8f0",
                    200: "#cbd5e1",
                    300: "#94a3b8",
                    400: "#64748b",
                    500: "#475569",
                    600: "#334155",
                    700: "#1e293b", // dark dim blue
                    800: "#0f172a",
                    900: "#0a1624",
                },
            },
        },
    },
    plugins: [],
};
export default config;
