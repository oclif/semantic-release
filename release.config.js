const path = require('path')

module.exports = {
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  publish: [
    {
      path: '@semantic-release/exec',
      cmd: path.join(__dirname, 'scripts/typedoc'),
    },
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
}
