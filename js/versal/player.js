'use strict';

var React = require('react/addons');
var _ = require('underscore');
var VersalPlayerAPI = require('versal-gadget-api/src/player-api');

var Player = React.createClass({

  getInitialState: function() {
    return { isReady: false };
  },

  componentWillMount: function() {
    this.player = new VersalPlayerAPI();

    if(!_.isUndefined(this.props.propertySheets)) {
      this.player.setPropertySheetAttributes(this.props.propertySheets);
    }

    this.player.startListening();

    this.player.once('attributesChanged', this._onAttributesChanged);
    this.player.once('learnerStateChanged', this._setIsEditableToComponentState);
    this.player.once('editableChanged', function() {
      this.setState({ isReady: true });
    }.bind(this));
  },

  componentDidMount: function() {
    this.player.watchBodyHeight();
    this.player.on('editableChanged', this._setIsEditableToComponentState);
    this.player.on('attributesChanged', this._onAttributesChanged);
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextState.isReady;
  },

  render: function() {
    // Render the gadget with all state set as props when ready
    if (this.state.isReady) {
      return React.addons.cloneWithProps(
        this.props.children,
        _.extend({}, this.state, { setAttribute: this._setAttribute })
      );
    } else {
      return null;
    }
  },

  _setAttribute: function(key, value) {
    this.player.setAttribute(key, value);
  },

  _setIsEditableToComponentState: function({ editable }) {
    this.setState({ isEditable: editable });
  },

  _onAttributesChanged: function(attributes) {
    this.setState(attributes);
  }
});

module.exports = Player;
