'use strict';

module.exports = function(config) {
  config.set({
    files: [
      'node_modules/react/dist/react-with-addons.js',
      'tests/*.test.js'
    ],
    frameworks: ['mocha'],
    preprocessors: {
      '{components,tests}/*.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style!css'
          },
          {
            test: /\.js$/,
            exclude: /node_modules|ckeditor/,
            loader: 'babel'
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['dots'],
    port: 9888,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    browsers: ['Firefox']
  });
};
