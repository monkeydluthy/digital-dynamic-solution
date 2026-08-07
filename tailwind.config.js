/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Brand: black + green-teal + white
        // secondary/accent remapped to teal so legacy rainbow classes resolve to brand
        primary: {
          50: '#EAF8F3',
          100: '#D5F1E8',
          200: '#A8E3D4',
          300: '#6DCFB8',
          400: '#19C3B2',
          500: '#0E9589',
          600: '#0C8076',
          700: '#0A6B63',
          800: '#085650',
          900: '#0F172A',
        },
        secondary: {
          50: '#EAF8F3',
          100: '#D5F1E8',
          200: '#A8E3D4',
          300: '#6DCFB8',
          400: '#19C3B2',
          500: '#0E9589',
          600: '#0C8076',
          700: '#0A6B63',
          800: '#085650',
          900: '#0F172A',
        },
        accent: {
          50: '#EAF8F3',
          100: '#D5F1E8',
          200: '#A8E3D4',
          300: '#6DCFB8',
          400: '#19C3B2',
          500: '#0E9589',
          600: '#0C8076',
          700: '#0A6B63',
          800: '#085650',
          900: '#0F172A',
        },
        ink: '#0F172A',
        mint: '#EAF8F3',
        card: '#F5F8FB',
        body: '#5B6675',
        muted: '#8894A3',
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
