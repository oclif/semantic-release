#!/usr/bin/env node

const execa = require('execa')
const npmRunPath = require('npm-run-path')

module.exports = (cmd, opts = {}) => {
  execa.shellSync(cmd, {env: npmRunPath.env(), stdio: 'inherit', ...opts})
}
