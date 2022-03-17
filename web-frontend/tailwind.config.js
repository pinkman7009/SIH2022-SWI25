const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          DEFAULT: "#1A2E47",
        },
        secondary: {
          DEFAULT: "#163B73",
        },
        primaryBg: {
          // DEFAULT: "rgb(232, 241, 245)",
          DEFAULT: "#FFFFFF",
        },
        secondaryBg: {
          DEFAULT: "rgb(232, 241, 245)",
          // DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        body: ["Lato"],
      },
    },
  },
  plugins: [],
};
