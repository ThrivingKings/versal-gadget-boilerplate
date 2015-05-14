'use strict';

var React = require('react/addons');

var styles = {
  container: {
    overflow: 'hidden'
  }
};

var HelloWorld = React.createClass({

  propTypes: {
    isEditable: React.PropTypes.bool.isRequired,
    setAttribute: React.PropTypes.func.isRequired,
    sampleCheck: React.PropTypes.bool
  },

  render: function() {
    return (
      <div style={styles.container}>
        <h1 className="hello">Hello World</h1>
        {this._maybeRenderAuthorMessage()}
        {this._maybeRenderSampleCheck()}
      </div>
    );
  },

  _maybeRenderAuthorMessage: function() {
    if(this.props.isEditable) {
      return (
        <p className="author-msg">Author view</p>
      );
    }

    return null;
  },

  _maybeRenderSampleCheck: function() {
    var checkedAction = (this.props.sampleCheck ? "is" : "is not");

    return (
      <p>It {checkedAction} checked!</p>
    );
  }
});

module.exports = HelloWorld;
