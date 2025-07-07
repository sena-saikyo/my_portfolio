/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dot: ['"DotGothic16"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
