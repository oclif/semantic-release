#!/usr/bin/env node

const execa = require('execa')
const npmRunPath = require('npm-run-path')

module.exports = (cmd, args, opts = {}) => {
  execa.command(cmd, args, {env: npmRunPath.env(), stdio: 'inherit', ...opts})
}
