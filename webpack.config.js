var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js'
  },
  module: {
    loaders: [
      // Css loaders
      {
        test: /\.less$/,
        loaders: [
          'style?sourceMap',
          'css?modules',
          'less?sourceMap'
        ]
      },
      // File loader to handle font imports
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=[name].[ext]'
      },
      // Finally, babel everything left
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
