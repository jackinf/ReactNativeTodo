/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

import AppNavigator from './public/navigation/AppNavigator';
import * as screenTypes from './public/navigation/ScreenTypes';

class ReactNativeTodo extends Component {
  render() {
    return <AppNavigator initialRoute={{ ident: screenTypes.MAIN }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent('ReactNativeTodo', () => ReactNativeTodo);
