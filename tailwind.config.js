module.exports = {
  purge: ['./pages/**/*.{tsx}', './components/**/*.{tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
     'Kaushan' : ['Kaushan Script',]
     },
    extend: {
      colors: {
        green: {
       
          DEFAULT: '#00f260',
     
        },
      },
    },
  },

  
  plugins: [],
}
