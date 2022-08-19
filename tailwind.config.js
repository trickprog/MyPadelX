/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },

      colors: {
        'colfooter': '#474246',
        'colblue': '#2B88DE',
        'colnav': '#041E42',
        'colselected': '#3D79CC',
        'colred': '#CA000F',
        'colyellow': '#FF9900'
      },
    },
  },


  plugins: [],
}