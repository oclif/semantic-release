const path = require('path')

const script = script => ({
  path: '@semantic-release/exec',
  cmd: `${path.join(__dirname, 'scripts', script)} \${nextRelease.version}`,
})

module.exports = {
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  publish: [
    script('prepublish'),
    '@semantic-release/changelog',
    '@semantic-release/npm',
    {
      path: '@semantic-release/git',
      assets: ['package.json', 'CHANGELOG.md', 'README.md', 'docs'],
    },
    '@semantic-release/github',
  ],
}
