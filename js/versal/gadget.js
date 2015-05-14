'use strict';

var React = require('react/addons');
var Player = require('./player');
var HelloWorld = require('../components/hello_world');

/* global window */

var gadgetConfig = {
  propertySheets: {
    sampleCheck: {
      title: 'Sample checkbox',
      type: 'Checkbox'
    }
  }
};

React.render(
  <Player {...gadgetConfig}>
    <HelloWorld />
  </Player>,
  window.document.querySelector('.gadget')
);
