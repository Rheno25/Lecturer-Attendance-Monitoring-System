/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: "rgba(228, 228, 228, 1)",
        white: "#fff",
        gray: {
          "100": "rgba(0, 0, 0, 0.8)",
          "200": "rgba(0, 0, 0, 0.5)",
        },
        black: "#000",
        gainsboro: "#d9d9d9",
        royalblue: "#fcb900",
        red: "#e90b0b",
        crimson: "#dd3838",
      },
      spacing: {},
      fontFamily: {
        "body-h4": "Montserrat",
        "archivo-black": "'Archivo Black'",
        roboto: "Roboto",
      },
      borderRadius: {
        "21xl": "40px",
        xl: "20px",
      },
      width: {
        '-full': '-100%',
        '-1/2': '-50%',
        '-1/4': '-25%',
      },
    },
    fontSize: {
      xs: "12px",
      mini: "15px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "19xl": "38px",
      "13xl": "32px",
      "7xl": "26px",
      sm: "14px",
      xl: "20px",
      base: "16px",
      "45xl": "64px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
