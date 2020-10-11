const { getOptions } = require('loader-utils')

function loader(src) {
  console.log('RUNNING LOG LOADER: ', this.resourcePath, '\n\n', src, '\n\n')

  return src
}

module.exports = loader
