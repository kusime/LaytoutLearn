/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage:{
        'coverA': "url('coverA.png')",
      },
      fontFamily:{
        'up':['"Dancing Script"', 'cursive'],
        'title':['"Cookie"', 'cursive'], 
        'singer':['"Allura"', 'cursive'],
        'liryics':['"Gruppo"', 'cursive']
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
