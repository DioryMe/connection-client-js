/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['dist', 'node_modules'],
  transformIgnorePatterns: ['node_modules/(?!multiformats)'],
  transform: {
    'node_modules/multiformats/.+\\.(j|t)sx?$': 'babel-jest',
  },
}
