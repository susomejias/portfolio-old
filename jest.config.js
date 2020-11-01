// eslint-disable-next-line
const { defaults } = require('jest-config')

module.exports = {
  ...defaults,
  collectCoverage: true,
  coverageReporters: ['json-summary'],

  testPathIgnorePatterns: [
    '<rootDir>/__tests__/e2e',
    '<rootDir>/src/lib/mirage'
  ],
  setupFiles: ['<rootDir>/setupTest.js']
}
