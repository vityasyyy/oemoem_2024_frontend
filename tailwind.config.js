/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        basicBlack: {
          10: '#302E2F',
        },
        basicGrey: {
          10: '#626061',
        },
        basicLightGrey: {
          10: '#B1B1B1',
        },
        basicBlue: {
          10: '#4C5195',
        },
        basicLightGreen: {
          10: '#9DA97E',
        },
        basicDarkGreen: {
          10: '#467448',
        },
        basicPurple: {
          10: '#9A3C60',
        },
        basicLightBrown: {
          10: '#EDB465',
        },
        basicDarkBrown: {
          10: '#CE7B39',
        },
        basicWhite: {
          10: '#FFFFFF',
        },
        basicRed: {
          10: '#9B1A2E',
        },
        basicOrange: {
          10: '#CF363E',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
