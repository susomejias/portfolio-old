/* eslint-disable */
const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withPWA = require('next-pwa')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

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
  }
  // images: {
  //   domains: [
  //     'localhost',
  //     'susomejias.es',
  //     'dev-to-uploads.s3.amazonaws.com',
  //     'res.cloudinary.com',
  //     'assets.vercel.com'
  //   ]
  // }
}

module.exports = withPlugins([
  [
    withTypescript,
    {
      webpack(config) {
        config.node = {
          fs: 'empty'
        }
        return config
      }
    }
  ],
  [
    withImages,
    {
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
  ],
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public'
      }
    }
  ]
])
