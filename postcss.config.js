const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './index.html',
    './src/App.vue',
    './src/components/**/*.vue',
    './src/views/**/*.vue',
    './src/main.js',
    './src/**/*.js',
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV == 'production' ? [purgecss] : []),
  ],
}
