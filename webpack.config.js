const path = require('path')

module.exports = {
  module: { 
    rules: [ 
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
      }
    ]
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist/',
    filename: "paper.js"
  }
}
