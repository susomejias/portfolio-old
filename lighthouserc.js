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
      assertions: {
        'categories:performance': ['warning', { minScore: 0.75 }],
        'categories:seo': ['warning', { minScore: 0.75 }],
        'categories:best-practices': ['warning', { minScore: 0.75 }],
        'categories:accessibility': ['warning', { minScore: 0.75 }]
      }
    },
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage'
    }
  }
}
