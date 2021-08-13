process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: [
      'localhost',
      'susomejias.es',
      'dev-to-uploads.s3.amazonaws.com',
      'res.cloudinary.com',
      'assets.vercel.com'
    ],
    path: '/_next/image',
    loader: 'default'
  }
}
