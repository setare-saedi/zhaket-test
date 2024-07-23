/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
      yakan: [
        '"yakan", sans-serif',
      ],
      'serif': ['ui-serif', 'Georgia'],

    },
    },
  },
  plugins: [],
}

