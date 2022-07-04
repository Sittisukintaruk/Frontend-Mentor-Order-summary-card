module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "Pale-blue": "hsl(225, 100%, 94%)",
      "Bright-blue": "hsl(245, 75%, 52%)",
      "Very-pale-blue": "hsl(225, 100%, 98%)",
      "Desaturated-blue": "hsl(224, 23%, 55%)",
      "Dark-blue": "hsl(223, 47%, 23%)",
    },
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
    },
    screens: {
      tablet: "520px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
