exports.prepare = (_, options) => {
  const fs = require('fs-extra')
  const path = require('path')
  const pjson = require(path.join(process.cwd(), 'package.json'))
  pjson.version = options.nextRelease.version
  fs.outputJSONSync('package.json', pjson, {spaces: 2})
}
