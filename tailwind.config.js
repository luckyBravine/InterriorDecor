/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
  "./public/index.js"
];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#00040f",
      secondary: "#00f6ff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      'custom-image-one': "url('/src/assets/hdone.jpg')",
      'custom-image-two': "url('/src/assets/hdtwo.jpg')",
      'custom-image-three': "url('/src/assets/hdthree.jpg')",
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];