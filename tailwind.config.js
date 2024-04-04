/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      colors: {
        'somari': {
          light: '#f68722',
          DEFAULT: '#f25a2d',
          dark: '#ef2b43',
        }
    },
    
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
}

