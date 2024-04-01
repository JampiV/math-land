/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pry/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

