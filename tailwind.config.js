/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',
        ink: '#111111',
      },
      backgroundImage: {
        'hero-image': "url('/src/assets/images/hero.png')",
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '20px',
          // lg: "50px",
          // sm: "2rem",
          // lg: "4rem",
          // xl: "5rem",
          '2xl': '4rem',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
        center: true,
      },
    },
  },
  plugins: [],
};
