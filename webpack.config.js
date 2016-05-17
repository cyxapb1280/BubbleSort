const webpack = require('webpack');

module.exports = {
  entry: "./js/app.js",
  output: {
    path: __dirname,
    filename: "./js/bundle.js"
  },

  devtool: 'source-map',
  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};