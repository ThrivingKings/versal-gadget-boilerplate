'use strict';

var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Expect = require('expect');

var HelloWorld = require('../js/components/hello_world');

var findComponentByClass = TestUtils.findRenderedDOMComponentWithClass;
var renderComponent = TestUtils.renderIntoDocument;

describe('HelloWorld', function() {
  it('should render', function() {
    var component = renderComponent(
        <HelloWorld />
    );

    var helloComponent = findComponentByClass(
      component,
      'hello'
    );

    Expect(helloComponent).toExist();
  });

  it('should render author message', function() {
    var component = renderComponent(
        <HelloWorld
          isEditable={true} />
    );

    var authorMsgComponent = findComponentByClass(
      component,
      'author-msg'
    );

    Expect(authorMsgComponent).toExist();
  });
});
