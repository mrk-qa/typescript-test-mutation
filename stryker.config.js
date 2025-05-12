/** @type {import('@stryker-mutator/api/core').StrykerOptions} */
module.exports = {
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  coverageAnalysis: 'off',
  mutate: ['src/**/*.ts'],
  jest: {
    configFile: 'jest.config.js'
  }
};
