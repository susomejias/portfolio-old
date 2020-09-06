const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withPWA = require('next-pwa')

module.exports = withTypescript({
  webpack(config, options) {
    return config
  }
})
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})
