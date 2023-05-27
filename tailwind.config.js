/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
          "./components/**/*.{html,js",
        ],
  
  theme: {
    extend: {
      fontFamily:{
        Hanken: ['Hanken Grotesk', 'sans-serif'],
        Open: ['Open Sans', 'sans-serif'],
      },
      colors:{
        'Gri':'#2A2A2A',
      }
    },
  },
  plugins: [],
}

