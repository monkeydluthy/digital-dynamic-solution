/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefaff',
          100: '#def5ff',
          200: '#b3ecff',
          300: '#70ddff',
          400: '#2ccfff',
          500: '#00bfff',
          600: '#0095df',
          700: '#0077b3',
          800: '#006291',
          900: '#004d70',
        },
        secondary: {
          50: '#fff5f5',
          100: '#ffe6e6',
          200: '#ffcccc',
          300: '#ff9999',
          400: '#ff6666',
          500: '#ff3333',
          600: '#ff0000',
          700: '#cc0000',
          800: '#990000',
          900: '#660000',
        },
        accent: {
          50: '#f3f0ff',
          100: '#e6e0ff',
          200: '#cdc0ff',
          300: '#b39fff',
          400: '#9a7fff',
          500: '#805fff',
          600: '#663fff',
          700: '#4d1fff',
          800: '#3300ff',
          900: '#2600cc',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-in forwards',
      },
    },
  },
  plugins: [],
};
