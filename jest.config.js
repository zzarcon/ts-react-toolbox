const path = require('path');
const absPath = fileName => path.resolve(__dirname, fileName);

module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  setupTestFrameworkScriptFile: absPath('setupTests.js'),
  transform: {
    '^.+\\.(ts|tsx)$': absPath('preprocessor.js')
  },
  rootDir: absPath('../..'),
  testMatch: [
    '**/__tests__/*.(ts|tsx)'
  ],
  resetMocks: true
};