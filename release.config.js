const script = script => ({
  path: './scripts/lifecycle',
  script,
})

module.exports = {
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  prepare: [
    script('prepublishOnly'),
    script('prepack'),
    '@semantic-release/changelog',
    {path: './scripts/update_version.js'},
    script('version'),
    '@semantic-release/npm',
    {
      path: '@semantic-release/git',
      assets: ['package.json', 'CHANGELOG.md', 'README.md', 'docs'],
    },
    script('postversion'),
    script('postpack'),
  ],
  publish: [
    '@semantic-release/npm',
    '@semantic-release/github',
    script('postpublish'),
  ],
}
