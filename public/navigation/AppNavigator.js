/**
 * Created by jevgenir on 01/07/2016.
 */
'use strict';
import React, { Component } from 'react';
import {
  Navigator,
  Text,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'

import GoBack from '../components/Common/GoBack';

import TodoIndexScreen from '../screens/TodoIndexScreen'
import TodoShowScreen from '../screens/TodoShowScreen'
// import RealmIndexScreen from '../screens/RealmIndexScreen';
import CounterScreen from '../screens/CounterScreen';

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
      //
      // case "RealmIndexScreen":
      //   return (
      //     <RealmIndexScreen
      //       {...globalNavigatorProps}
      //       todo={route.todo}/>
      //   );

      case "CounterScreen":
        return (
          <CounterScreen
            {...globalNavigatorProps}
            />
        );

      default:
        return (
          <View>
            <Text>{`YO YOU MESSED SOMETHING UP ${route}`}</Text>
            <GoBack navigator={navigator} />
          </View>
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
/>
    )
  }

  // configureScene={(route) => ({
  //   ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })}/>
}

const styles = StyleSheet.create({

  navigatorStyles: {}

});

export default AppNavigator