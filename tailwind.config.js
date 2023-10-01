/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-image-1': 'url("/Hero.png")',
        'custom-image-2': 'url("/Hero2.jpg")',
        'custom-image-3': 'url("/Hero3.jpg")',
        'custom-image-4': 'url("/Hero4.jpg")',
      },
      fontFamily: {
        'sans': ['Work Sans', 'sans'],
      },
      backgroundColor: {
        'Navbg': '#FFFFFF',
      },
      colors: {
        'custom-blue': '#2947A9',
        'custom-orange': '#EA6D27',
        'custom-light-orange': '#E97F47',
        'custom-white': '#FFFFFF',
        'custom-light-blue': '#5078D7',
      },
    },
  },
  plugins: [],
}
