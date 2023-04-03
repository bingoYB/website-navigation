// eslint-disable-next-line import/no-anonymous-default-export
export default {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: ['**/*.(test|spec).(ts|tsx|js|jsx)'],
//   globals: {
//     'ts-jest': {
//       babelConfig: true,
//       tsConfig: 'jest.tsconfig.json',
//       diagnostics: false,
//     },
//   },
  // transform: { '^.+\\\\.(css|less)$': './styleMock.js' },
//   coveragePathIgnorePatterns: ['/node_modules/', 'setupTests.ts'],
//   setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
//   coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
//   moduleNameMapper: {
//     '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
//     '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
//   },
}
