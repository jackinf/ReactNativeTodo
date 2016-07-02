/**
 * Created by stylehopper on 2.07.16.
 */
import React from 'react';
import {
  ViewContainer,
  View,
  Text
} from 'react-native';

import GoBack from '../components/Common/GoBack';

class CounterScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Counter</Text>
        <GoBack navigator={this.props.navigator} />
      </View>
    )
  }
}

export default CounterScreen;