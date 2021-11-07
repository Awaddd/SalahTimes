/* eslint-disable prettier/prettier */
const withPWA = require('next-pwa')

module.exports = withPWA({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  pwa: {
    dest: 'public',
  },
})