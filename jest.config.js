module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: `v8`,
  moduleFileExtensions: [`js`, `jsx`, `ts`, `tsx`, `json`, `node`],
  roots: [`<rootDir>/tests`],
  testMatch: [`**/?(*.)+(spec|test).[tj]s?(x)`],
  testEnvironment: 'jest-environment-node',
  transformIgnorePatterns: ['/node_modules/'],
};
