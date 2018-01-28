const path = require('path')

const script = script => ({
  path: '@semantic-release/exec',
  cmd: path.join(__dirname, 'scripts', script),
})

module.exports = {
  verifyConditions: [
    script('init'),
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  publish: [
    script('prepublish'),
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
}
