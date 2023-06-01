/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aleg: `'DM Serif Display', serif`,
        roboto: `'Roboto', sans-serif`,
        ibm: `'IBM Plex Serif', serif`,
      },
      keyframes: {
        buttonSpacing: {
          "0%": { letterSpacing: "7px", transform: "translateX(0)" },
          "100%": { letterSpacing: "9px", transform: "translateX(0)" },
        },
      },
      animation: {
        buttonSpacingAnimation: "buttonSpacing 2s infinite",
      },
    },
  },
  plugins: [],
};
