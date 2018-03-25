module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/preprocessor.js'
  },
  testMatch: [
    '**/__tests__/*.(ts|tsx)'
  ],
  resetMocks: true
};