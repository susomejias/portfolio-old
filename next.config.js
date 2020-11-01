/* eslint-disable */
const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withPWA = require('next-pwa')

/* eslint-enable */
module.exports = withTypescript({
  webpack(config) {
    return config
  }
})

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
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
  },
  images: {
    domains: [
      'localhost',
      'susomejias.es',
      'dev-to-uploads.s3.amazonaws.com',
      'res.cloudinary.com',
      'assets.vercel.com'
    ]
  }
}

// always at the end
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  }
})
