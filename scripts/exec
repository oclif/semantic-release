#!/usr/bin/env node

const execa = require('execa')

module.exports = (cmd, args = [], opts = {}) => {
  execa.sync(cmd, args, {...opts, stdio: 'inherit'})
}

module.exports.shell = (cmd, opts = {}) => {
  execa.shellSync(cmd, {...opts, stdio: 'inherit'})
}
