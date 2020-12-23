const esModules = ['ant-design-vue', 'lodash-es'].join('|');

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    [`(${esModules}).+\\.js$`]: 'babel-jest'
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "\\.css.js$": "identity-obj-proxy",
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
