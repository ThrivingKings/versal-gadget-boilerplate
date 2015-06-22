var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: {
    gadget: './js/versal/gadget'
  },
  resolve: {
    root: [path.join(__dirname, "bower_components")]
  },
  output: {
    path: __dirname + '/dist/',
    publicPath: 'dist/',
    filename: '[name].js'
  },
  jshint: require('./jshint.config'),
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'jsxhint'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel'
      }
    ]
  }
};
