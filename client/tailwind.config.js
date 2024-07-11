
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "240px",
      // => @media (min-width: 640px) { ... }

      tablet: "640px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1000px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      // Configure your color palette here
      mainWhite: "#ffffff",
      headerBg:"#023047",
     homeBg:"#dee2e6",
     white:"#ffffff",
     black:"#000",
     orange:"#ff5400",
     mainRed: "#ef0827",
     mainBlack: "#000",
     mainBlue: "#023e8a",
     mainGray: " #303841",
     green:"#06d6a0",
     yellow:"#ffc300"
    },
    extend: {},
  },
  plugins: [],
}