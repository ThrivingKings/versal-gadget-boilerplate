'use strict';

var React = require('react/addons');

var styles = {
  container: {
    overflow: 'hidden'
  }
};

var HelloWorld = React.createClass({

  propTypes: {
    isEditable: React.PropTypes.bool.isRequired
  },

  render: function() {
    return (
      <div style={styles.container}>
        <h1 className="hello">Hello World</h1>
        {this._maybeRenderAuthorMessage()}
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
  }
});

module.exports = HelloWorld;
