/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      platinum: "#ECEAE9",
      melon: "#FAB39D",
      sky_blue: "#97C1D8",
      paynes_gray: "#426676",
      prussian_blue: "#093149",
      alternative_blue: "#0B3B57",
    },
    boxShadow: {
      "3xl": "0px 3px 3px 0px rgba(0, 0, 0, 0.3)",
    },
  },
  plugins: [],
};

