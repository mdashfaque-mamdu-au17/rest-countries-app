/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['var(--font-inter)'],
    },
    extend: {
      colors: {
        'light-grey': '#2B3844',
        'primary-black': '#111517',
        'light-grey-secondary': '#202C36',
        'light-grey-300': '#c4c4c4',
        'creame-white': '#FAFAFA',
      },
      boxShadow: {
        'nav-shadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
        'search-shadow': '0px 2px 9px 0px rgba(0, 0, 0, 0.05)',
        'card-shadow': '0px 0px 7px 2px rgba(0, 0, 0, 0.03)',
        'button-shadow': '0px 0px 7px 0px rgba(0, 0, 0, 0.29)',
        'country-box-shadow': '0px 0px 4px 1px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};
