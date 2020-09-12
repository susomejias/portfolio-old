/* eslint-disable */
const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withPWA = require('next-pwa')
/* eslint-enable */
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

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|webp|git|svg|)$/i,
        use: [
          {
            loader: `img-optimize-loader`,
            options: {
              compress: {
                // This will transform your png/jpg into webp.
                webp: true,
                disableOnDevelopment: false
              }
            }
          }
        ]
      }
    ]
  }
}

// always at the end
module.exports = withPWA({
  pwa: {
    dest: 'public'
  }
})
