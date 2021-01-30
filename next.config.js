/* eslint-disable */
const path = require('path')
const withPWA = require('next-pwa')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const runtimeCaching = require('next-pwa/cache')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = withPlugins([
  [
    withImages,
    {
      images: {
        deviceSizes: [
          16,
          32,
          48,
          64,
          96,
          128,
          256,
          384,
          480,
          576,
          768,
          992,
          1200,
          1366,
          1600
        ],
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
        dest: 'public',
        runtimeCaching
      }
    }
  ]
])
