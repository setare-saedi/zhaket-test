/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      yakan: [
        '"yakan", sans-serif',
      ],
      'serif': ['ui-serif', 'Georgia'],

    },
    extend: {
      keyframes: {
        timeLineAnimation: {
          from: {
            opacity: "0",
            transform: "translateX(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
            
          },
        },
        
      },
      
      animation: {
        timeLineAnimation: "timeLineAnimation 700ms ease 100ms",
      },
    
    },
  },
  plugins: [],
}

