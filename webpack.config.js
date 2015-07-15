var manifest = require('./versal.json')

module.exports = {
  entry: {
    gadget: './components/gadget'
  },
  output: {
    filename: 'gadget.js',
    library: ['VersalGadgets', manifest.name],
    libraryTarget: 'assign'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader'
      }
    ]
  }
};
