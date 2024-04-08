/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      bgColor: "#FFF7F1",
      textColor: "#222831",
      btnBg: "#FC6736",
    },
    fontFamily: {
      primaryFont: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
