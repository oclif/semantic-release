function run({script}, options) {
  const path = require('path')
  const pjson = require(path.join(process.cwd(), 'package.json'))
  const exec = require('./exec')
  process.env.OCLIF_NEXT_VERSION = options.nextRelease.version
  const cmd = pjson.scripts[script]
  if (cmd) {
    console.log(`running ${script} script:\n$ ${cmd}`)
    exec(cmd)
  }
}

exports.prepare = run
exports.publish = run
