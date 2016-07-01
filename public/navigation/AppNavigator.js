/**
 * Created by jevgenir on 01/07/2016.
 */
'use strict';
import React, { Component } from 'react';
import {
  Navigator,
  Text,
  StyleSheet,
  BackAndroid
} from 'react-native'

import TodoIndexScreen from '../screens/TodoIndexScreen'
import TodoShowScreen from '../screens/TodoShowScreen'

// var _navigator;
// BackAndroid.addEventListener('hardwareBackPress', () => {
//   if (_navigator && _navigator.getCurrentRoutes().length > 1) {
//     _navigator.pop();
//     return true;
//   }
//   return false;
// });


class AppNavigator extends Component {

  constructor() {
    super();
    this._renderScene = this._renderScene.bind(this);
  }

  _renderScene(route, navigator) {
    var globalNavigatorProps = {navigator};

    switch (route.ident) {
      case "TodoIndex":
        return (
          <TodoIndexScreen
            {...globalNavigatorProps} />
        );

      case "TodoShow":
        return (
          <TodoShowScreen
            {...globalNavigatorProps}
            todo={route.todo}/>
        );

      default:
        return (
          <Text>{`YO YOU MESSED SOMETHING UP ${route}`}</Text>
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })}/>
    )
  }

}

const styles = StyleSheet.create({

  navigatorStyles: {}

});

export default AppNavigator