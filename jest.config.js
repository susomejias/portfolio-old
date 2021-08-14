// eslint-disable-next-line
const { defaults } = require('jest-config')

module.exports = {
  ...defaults,
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['json-summary', 'html'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/e2e',
    '<rootDir>/src/lib/mirage'
  ],
  setupFiles: ['<rootDir>/setupTest.js']
}
