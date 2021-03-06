module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './snippets/*.liquid',
    './sections/*.liquid',
    './templates/*.json',
    './templates/*.liquid',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      }
    },
  },
  plugins: [],
}
