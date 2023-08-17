/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        orange: "0 0 10rem #EA5C2B",
      },
      transitionTimingFunction: {
        skillsLibrary: "cubic-bezier(0.68,-0.55,0.265,1.55)",
      },
    },
    colors: {
      primary: {
        400: "#E5E3C9",
        500: "#B4CFB0",
        600: "#94B49F",
      },
      grayscale: {
        0: "#F6FBF4",
        50: "#ffffff",
        100: "#efefef",
        200: "#FDFDFF",
        950: "#16161b",
      },
    },
  },
  plugins: [],
};
