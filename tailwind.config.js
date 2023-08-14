/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        orange: "0 0 10rem #EA5C2B",
      },
    },
    colors: {
      primary: {
        400: "#E5E3C9",
        500: "#B4CFB0",
        600: "#94B49F",
      },
      grayscale: {
        50: "#ffffff",
        100: "#efefef",
        200: "#FDFDFF",
        950: "#16161b",
      },
    },
  },
  plugins: [],
};
