/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    colors: {
      "blue-yonder": {
        100: "#E7ECFF",
        200: "#BAC3E5",
        300: "#929ECC",
        400: "#6F7CB2",
        500: "#505F98",
        600: "#37447E",
        700: "#222F65",
        800: "#111B47",
        900: "#091133",
      },
      "gray-nevada": {
        100: "#E9EBEC",
        200: "#CDD1D4",
        300: "#B0B8BC",
        400: "#939EA4",
        500: "#76848C",
        600: "#5D6970",
        700: "#454E54",
        800: "#393E41",
        900: "#141719",
      },
    },
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line no-undef
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#37447E",
          secondary: "#111B47",
          neutral: "#6F7CB2",
          ".btn:hover": {
            "background-color": "#929ECC",
            "border-color":"#929ECC"
          },
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
