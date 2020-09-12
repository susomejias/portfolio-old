module.exports = {
  ci: {
    collect: {
      /* Add configuration here */
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready on',
      url: [
        'http://localhost:3000',
        'http://localhost:3000/proyectos',
        'http://localhost:3000/ponencias',
        'http://localhost:3000/devto-posts',
        'http://localhost:3000/contacto'
      ],
      numberOfRuns: 3
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'offscreen-images': 'off',
        'uses-webp-images': 'off'
      }
    },
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage'
    }
  }
}
