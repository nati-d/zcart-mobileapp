/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],  
  theme: {
    extend: {
      fontFamily: {
        obold: ["OpenSansBold","sans-serif"],
        oextrabold: ["OpenSansExtraBold","sans-serif"],
        oitalic: ["OpenSansItalic","sans-serif"],
        olight: ["OpenSansLight","sans-serif"],
        omedium: ["OpenSansMedium","sans-serif"],
        oregular: ["OpenSansRegular","sans-serif"],
        osemibold: ["OpenSansSemiBold","sans-serif"],
      }
    },
  },
  plugins: [],
}

