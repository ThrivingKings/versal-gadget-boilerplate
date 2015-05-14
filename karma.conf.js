'use strict';

// We need the webpack config so we can bundle the tests identically
var webpack = require('./webpack.config');

module.exports = function(config) {
  config.set({
    files: ['tests/*.test.js'],
    frameworks: ['mocha'],
    preprocessors: {
      '{components,lib,tests}/**/*.js': ['webpack']
    },
    webpack: webpack,
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
