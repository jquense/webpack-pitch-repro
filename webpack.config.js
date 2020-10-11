module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['css-loader'],
      },
    ],
  },
}
