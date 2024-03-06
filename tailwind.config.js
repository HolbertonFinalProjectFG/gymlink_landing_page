/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem'
      },
      colors: {
        light: {
          primary: '#F09518',
          aux: '#FFFFFF',
          aux_op: '#232323',
          backg: '#EFF0F1'
        }
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        grozen: ['GrozenMedical', 'sans']
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
