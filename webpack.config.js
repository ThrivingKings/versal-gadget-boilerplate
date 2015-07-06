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
  externals: {
    'react/addons': 'React',
    'react': 'React'
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
