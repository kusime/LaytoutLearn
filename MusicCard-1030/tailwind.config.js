/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('bg.jpeg')",
        'cover1':"url('cover.png')",
      },
      fontFamily:{
        lucy :['"Fasthand"', 'cursive']
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
