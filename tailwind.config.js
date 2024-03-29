/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(#CC97BE 2px, #F5F5F5 5px, #F5F5F5 100px);",
      },
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        dark: "#1B1B1B",
        light: "#F5F5F5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
        primaryLight: "#CC97BE",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
