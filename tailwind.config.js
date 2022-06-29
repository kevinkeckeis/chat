/** @type {import('tailwindcss').Config} */
const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'base' }), iOSHeight],
};
