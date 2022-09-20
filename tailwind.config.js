const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        primary: '#dbdbdb',
        neutral: '#fafafa',
        darkpurple: '#3e1e72',
        neutral1: '#ebebec',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        headings: ['Montserrat'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
