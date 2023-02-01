import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: ".",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/__tests__/*.test.ts?(x)"],
};

module.exports = createJestConfig(customJestConfig);
