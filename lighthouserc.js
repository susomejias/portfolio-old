module.exports = {
  ci: {
    collect: {
      /* Add configuration here */
      staticDistDir: './public',
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
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage'
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        interactive: ['error', { maxNumericValue: 5200 }],
        'speed-index': ['error', { maxNumericValue: 4300 }],
        'resource-summary:script:size': ['error', { maxNumericValue: 170000 }],
        'resource-summary:total:size': ['error', { maxNumericValue: 300000 }]
      }
    }
  }
}
