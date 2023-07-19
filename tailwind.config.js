/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      nunitoSans: ['var(--font-nunitoSans)'],
    },
    extend: {
      colors: {
        'light-grey': '#2B3844',
        'primary-black': '#111517',
      },
      boxShadow: {
        'nav-shadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
