/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { "geist-mono": ["GeistMonoVF"] },
      animation: {
        "gradient-shift": "gradientShift 10s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%": {
            "background-image":
              "radial-gradient(ellipse closest-side at center, #7e4fff, rgba(255, 126, 95, 0))",
          },
          "100%": {
            "background-image":
              "radial-gradient(ellipse closest-side at center, #7e4fff, rgba(255, 126, 95, 0))",
          },
        },
      },
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7faf",
        // ...
        600: "rgba(21,21,21)",

        900: "rgba(25,25,25)",
      },
      "light-gray": colors.gray,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      amber: colors.amber,
      orange: colors.orange,
      emerald: colors.emerald,
      yellow: colors.yellow,
      green: colors.green,
      lime: colors.lime,

      // ...
    },
  },
  plugins: [],
  darkMode: "selector",
};
