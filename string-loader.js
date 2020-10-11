const { getOptions } = require('loader-utils')
function loader() {}

loader.pitch = function pitch() {
  const options = getOptions(this)

  return `module.exports = "${options.content}"`
}

module.exports = loader
