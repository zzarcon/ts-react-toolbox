const path = require('path');
const absPath = fileName => path.resolve(__dirname, fileName);

module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  setupFilesAfterEnv: [absPath('setupTests.js')],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  rootDir: absPath('../..'),
  testMatch: [
    '**/__tests__/*.(ts|tsx)'
  ],
  resetMocks: true
};
