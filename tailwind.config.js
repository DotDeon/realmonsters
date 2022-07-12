/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        rm_yellow: '#fdd008',
        rm_green: '#90bb1e',
        rm_pink: '#e52d4a',
        rm_blue: '#248fb6',
      },

      // yellow #faea14
      keyframes: {
        animate: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(150%)' },
        },
      },
      animation: {
        clouds1: 'animate 8s linear infinite',
        clouds2: 'animate 16s linear infinite',
        clouds3: 'animate 24s linear infinite',
        clouds4: 'animate 32s linear infinite',
        clouds5: 'animate 40s linear infinite',
      },
    },
  },
  plugins: [],
};
