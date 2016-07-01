/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Relay from 'react-relay';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import config from './config';
import Main from './public/components/Main';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(config.graphqlURL)
);

class ReactNativeTodo extends Component {
  // render() {
  //   return <AppNavigator initialRoute={{ ident: "TodoIndex" }} />;
  // }
  render() {
    var viewerRoute = new ViewerRoute();
    return (<Relay.RootContainer
      Component={Main}
      route={viewerRoute}
    />);
  }
}

AppRegistry.registerComponent('ReactNativeTodo', () => ReactNativeTodo);
