const script = script => ({
  path: './scripts/lifecycle',
  script,
})

module.exports = {
  branch: 'dev',
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  prepare: [
    script('preversion'),
    script('version'),
    script('postversion'),
    script('prepublishOnly'),
    script('prepack'),
    '@semantic-release/changelog',
    '@semantic-release/npm',
    {
      path: '@semantic-release/git',
      assets: ['package.json', 'CHANGELOG.md', 'README.md', 'docs'],
    },
    script('postpack'),
  ],
  publish: [
    '@semantic-release/npm',
    '@semantic-release/github',
    script('postpublish'),
  ],
}
