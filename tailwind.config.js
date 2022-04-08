const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.blueGray,
      red: colors.rose,
      yellow: colors.yellow,
      green: colors.green,
      pink: colors.fuchsia,
      blue2: colors.blue,
    },
    textColor: {
      primary: "#FBF5F4",
      secondary: "#636871",
      danger: "#e3342f",
      gray: colors.coolGray,
      blue: colors.blueGray,
      blue2: colors.blue,
      red: colors.rose,
      yellow: colors.yellow,
      green: colors.green,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      game: ["'Press Start 2P'", "cursive"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
