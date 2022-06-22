const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        primary: '#dbdbdb',
        neutral: '#fafafa',
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        headings: ["Montserrat"]
      }
    },
  },
  plugins: [],
}
