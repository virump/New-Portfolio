import type { Config } from "tailwindcss";

// Tailwind CSS v4 — most configuration is done via @theme in globals.css
// This file is kept for any v4-compatible plugin integrations only.
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
