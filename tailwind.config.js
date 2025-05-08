/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      colors: {
        primaryOrange : "#FB9129",
        textBlue : "#0A0E27",
        fadedGrey: "#EEEEEE",
        bgBlack: "#1D1D1D",
        textBlack: "#000000",
        textWhite : "#FFFFFF",
        primaryPink : "#F1A5C2",
        secondaryTextBlue : "#6672C7",
        globeBlue  : "#262C55",
        textGreen : "#00ABBE",
        secondaryOrange :"#FC4E20",
        primaryGreen : "#35A162"
      },
      extend: {
        fontFamily:{
          millik : ["millik", "sans-serrif"],
          Moderat : ["Moderat-Bold", "sans-serrif"]
        },
        boxShadow: {
          '3xl': '0 0 60px  rgba(0, 0, 0, 0.9)',
        }
      },
    },
    plugins: [],
  }
  