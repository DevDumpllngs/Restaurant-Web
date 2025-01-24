module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"], // Fuente para "Chelsea"
        oleo: ['"Oleo Script"', 'cursive'],
        playfair: ['"Playfair Display"', "serif"],
        opensans: ['"Open Sans"', "sans-serif"],
        birthstone: ['"Birthstone"', 'cursive'],
      },
      colors: {
        gold: "#FFD700", 
        "gold-dark": "#C5A300", 
        yellow: {
          500: "#FFC107",
          400: "#FFD54F",
        },
      },
    },
    screens: {
      lg: "1024px", // Todo empieza desde 1024px
    },
  },
  plugins: [],
};
