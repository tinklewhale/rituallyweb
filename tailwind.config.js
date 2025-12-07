/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          '50': '#FFFAF0',
          '100': '#FEEBC8',
          '500': '#ED8936', // Placeholder orange/warm tone, will refine
        }
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif'], // Premium font
      }
    },
  },
  plugins: [],
}
