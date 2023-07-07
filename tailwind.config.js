/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1343px',
      '2xl': '1441px',
    },
    extend: {
      fontFamily:{
        'geologica':['Geologica', 'sans-serif'],
        'playfair-display':['Playfair Display', 'sans-serif'],
      },
      colors:{
        'main-color':'#443939',
        'orange-color':'#CBAA5D',
        'header-color':'#443939',
        'smooth-color':'#989090',
        'slider-text':'#444040'
      }
    },
  },
}

