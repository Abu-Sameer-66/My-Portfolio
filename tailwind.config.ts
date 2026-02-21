import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Pure deep black with a 1% tint
        surface: "#0f0a14",    // Dark purple/black for cards
        golden: {
          DEFAULT: "#eab308",  // Premium Gold
          hover: "#ca8a04",    // Darker gold for hover
        },
        crimson: "#991b1b",    // Dark Red
        royal: "#6b21a8",      // Deep Purple
      },
    },
  },
  plugins: [],
};
export default config;