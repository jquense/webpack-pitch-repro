require('core-js/modules/esnext.string.replace-all')
const fs = require('fs')

const VirtualModulesPlugin = require('webpack-virtual-modules')

const path = require('path')

const encode = (str) =>
  Buffer.from(str)
    .toString('base64')
    .replace('+', '-')
    .replace('/', '_')
    .replace(/=+$/, '')

const plugin = new VirtualModulesPlugin()

/**
 * Extracts a tag template and turns it's contents into a linked virtual module
 */
function loader(src) {
  const basename = path.basename(this.resourcePath)
  const dirname = path.dirname(this.resourcePath)

  let i = 0
  src = src.replaceAll(/evil`([^`]+)`/gm, (_, content) => {
    const name = `${i++}_${basename}`

    // fs.writeFileSync(
    //   path.join(dirname, name),
    //   `module.exports = \`${content}\`;`,
    // )
    plugin.writeModule(
      path.join(dirname, name),
      `module.exports = \`${content}\`;`,
    )

    return `require("./${name}");`
  })

  return src
}

loader.plugin = plugin

module.exports = loader
