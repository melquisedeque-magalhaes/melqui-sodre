// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig = {
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.ts"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.tsx",
        "!src/**/*.spec.tsx",
        "!src/**/*__app.tsx",
        "!src/**/*__document.tsx",
    ],
    coverageReporters: ["lcov", "json"],
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
