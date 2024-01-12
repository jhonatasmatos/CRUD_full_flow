/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
	dir: './',
})

const config: Config = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	resetMocks: true,
	resetModules: true,
}

export default createJestConfig(config)
