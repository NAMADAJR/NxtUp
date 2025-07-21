/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInSlow: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
  animation: {
    fadeInSlow: 'fadeInSlow 1.2s ease-out forwards',
  },
      colors: {
        primaryBg: "#121212",
        surface: "#1E1E1E",
        accentPrimary: "#00BFFF",
        accentSecondary: "#F0F0F0",
        textMain: "#A0A0A0",
        textMuted: "#2C2C2C",
        divider: "#2C2C2C",
        error: "#FF4C4C",
      },
    },
  },
  plugins: [],
}
