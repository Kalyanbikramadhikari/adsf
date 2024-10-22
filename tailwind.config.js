/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        button: {
          default: '#3475B1',
          hover: '#285B8A',


        },
        border: '#79747E',
        alert: '#E53359',
        primary:'#1A64A7'

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
         manrope: ['Manrope', 'sans-serif'],
      },
      fontSize:{
        heading:'33px',
        normal:'14px',
        sixteen:'16px'
      },
      fontWeight:{
        heading: 600, // semibold
        normal: 400, //regular
      },
      borderRadius: {
        border:'5px'
      }
    },
  },
  plugins: [],
}

