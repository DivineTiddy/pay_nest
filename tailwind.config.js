// tailwind.config.js
import scrollbarHide from 'tailwind-scrollbar-hide'

export default {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Make sure this is correct
   plugins: [scrollbarHide],
}
