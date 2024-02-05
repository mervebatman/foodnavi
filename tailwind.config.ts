import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        foodnavi: "#57B169 ",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#57B169",
          // "secondary": "#ffffff",
          // "accent": "#ffffff",
          neutral: "#2B3440",
          // "base-100": "#ffffff",
          // "info": "#ffffff",
          // "success": "#00ffff",
          // "warning": "#ffffff",
          // "error": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
