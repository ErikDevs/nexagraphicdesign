/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#F4F4F4",
        secondary: "#191825",
        accent: "#b100cd",
        accentTwo: "#353535",
        gradient: "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
      },
      fontFamily: {
        zenDots: ["Zen Dots"],
        inter: ["Inter", "san-serif"],
      },
    },
  },
  plugins: [],
};
