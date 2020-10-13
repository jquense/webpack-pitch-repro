const HtmlWebpackPlugin = require('html-webpack-plugin')
const loader = require('./inline-module-loader')

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: [/node_modules/],
        use: ['./inline-module-loader'],
      },
      {
        test: /\.css/,
        use: ['css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), loader.plugin],
}
