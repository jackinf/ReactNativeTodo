/**
 * Created by stylehopper on 28.06.16.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';

class Button extends Component {
  constructor() {
    super();

    this.state = {active: false};

    this._onHighlight = this._onHighlight.bind(this);
    this._onUnhighlight = this._onUnhighlight.bind(this);
  }

  _onHighlight() {
    this.setState({active: true});
  }

  _onUnhighlight() {
    this.setState({active: false});
  }

  render() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
        <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    // overflow: 'hidden',
    backgroundColor: 'red'
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center'
  }
});

export default Button;