export default {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    roots: ['<rootDir>/src', '<rootDir>/test'],
    testRegex: '.*\\.spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
};
