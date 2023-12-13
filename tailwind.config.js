/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        platinum: "#ECEAE9",
        melon: "#FAB39D",
        sky_blue: "#97C1D8",
        paynes_gray: "#426676",
        prussian_blue: "#093149",
        alternative_blue: "#0B3B57",
      },
      fontFamily: {
        MedievalSharp: ["MedievalSharp", "serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
    dropShadow: {
      fancyshadow: "5px 5px 2px rgba(9, 49, 73, 0.25)",
    },
    boxShadow: {
      "3xl": "0px 3px 3px 0px rgba(0, 0, 0, 0.3)",
    },
    clipPath: { poly1: "polygon(48.3% 0%, 100% 100%, 21.8% 71%)" },
  },
  plugins: [require("tailwind-clip-path")],
};
