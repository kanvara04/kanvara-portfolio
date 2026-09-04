/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: ["class", '[data-theme="dark"]'],

  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        soft: "rgb(var(--color-soft) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        charcoal: "rgb(var(--color-charcoal) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        accentInk: "rgb(var(--color-accent-ink) / <alpha-value>)",
        white: "#FFFFFF",
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },

      boxShadow: {
        soft: "0 14px 42px rgb(var(--shadow-color) / 0.12)",
        lift: "0 26px 70px rgb(var(--shadow-color) / 0.18)",
        glow: "0 0 0 1px rgb(var(--color-line) / 0.7), 0 24px 70px rgb(var(--shadow-color) / 0.16)",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(-1deg)" },
          "50%": { transform: "translate3d(0, -12px, 0) rotate(1deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(10px, -8px, 0)" },
        },
      },

      animation: {
        float: "float 7s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
