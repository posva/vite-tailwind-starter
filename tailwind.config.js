const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: ['./dist/**/*.css'],
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
