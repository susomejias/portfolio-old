module.exports = {
  ci: {
    collect: {
      /* Add configuration here */
      staticDistDir: './public',
      startServerCommand: 'npm run dev',
      url: [
        'http://localhost:3000',
        'http://localhost:3000/proyectos',
        'http://localhost:3000/ponencias',
        'http://localhost:3000/devto-posts',
        'http://localhost:3000/contacto'
      ]
    },
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage'
    }
  }
}
