module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}"],
  setupFilesAfterEnv: ['./jest.setup.js'],
}
