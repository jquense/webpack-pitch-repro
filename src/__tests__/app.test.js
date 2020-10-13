const webpack = require('webpack')

it('should do something', (done) => {
  webpack(require('../../webpack.config'), () => {
    done()
  })
})
