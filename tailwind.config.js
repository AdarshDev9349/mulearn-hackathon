/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '90': '360px',
        '65': '260px',
      },
      perspective: {
        '1000': '1000px',
      },
      transitionDuration: {
        '999ms': '999ms',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      }
    },
  },
  
  plugins: [],
}