/** @type {import('@stryker-mutator/api/core').StrykerOptions} */
module.exports = {
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  coverageAnalysis: 'off',
  mutate: ['src/**/*.ts'],
  htmlReporter: {
    fileName: 'reports/mutation/index.html',
  },
  jest: {
    configFile: 'jest.config.js'
  }
};
