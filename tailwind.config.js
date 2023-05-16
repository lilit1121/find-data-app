/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'noto-sans': 'Noto Sans'
    },
    extend: {
      boxShadow: {
        'shadow-sm': 'box-shadow: 0px 1px 0px #E3E3E3',
      },
      colors: {
        'cotton-candy': '#f9fafb',
        'snowy-day': '#f3f4f6',
        'thunderstorm': '#1f2937',
        'slate-gray': '#6B7280',
        'royal-blue': '#3D409A' 
      },
      spacing: {
        '95-percent': '95%',
        '6.9-percent': '6.9%',
        '30': '30px',
      }
    },
  },
  plugins: [],
}
