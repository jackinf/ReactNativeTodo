/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import DrawerLayoutAndroid from 'DrawerLayoutAndroid';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import AppNavigator from './public/navigation/AppNavigator';

class ReactNativeTodo extends Component {
  render() {
    return <AppNavigator initialRoute={{ ident: "TodoIndex" }} />;
  }
}

AppRegistry.registerComponent('ReactNativeTodo', () => ReactNativeTodo);
