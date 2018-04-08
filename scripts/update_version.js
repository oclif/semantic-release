exports.prepare = (_, options) => {
  const fs = require('fs-extra')
  const path = require('path')
  const pjson = require(path.join(process.cwd(), 'package.json'))
  const {version} = options.nextRelease
  console.log(`updating package.json version from ${pjson.version} to ${version}`)
  pjson.version = version
  fs.outputJSONSync('package.json', pjson, {spaces: 2})
}
