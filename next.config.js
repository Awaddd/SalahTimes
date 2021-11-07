/* eslint-disable prettier/prettier */
const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  pwa: {
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
  },
})