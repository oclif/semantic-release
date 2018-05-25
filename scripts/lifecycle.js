const {log} = require('./log')

function run({script}, options) {
  const path = require('path')
  const pjson = require(path.join(process.cwd(), 'package.json'))
  const exec = require('./exec')
  process.env.OCLIF_NEXT_VERSION = options.nextRelease.version
  pjson.scripts = pjson.scripts || {}
  const cmd = pjson.scripts[script]
  if (cmd) {
    log(`running ${script} script:\n$ ${cmd}`)
    exec(cmd)
  }
}

exports.prepare = run
exports.publish = run
