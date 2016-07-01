/**
 * Created by jevgenir on 01/07/2016.
 */
'use strict';
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native'

class ViewContainer extends Component {
  render() {
    return (
      <View style={[styles.viewContainer, this.props.style || {}]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({

  viewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  }

});

module.exports = ViewContainer;