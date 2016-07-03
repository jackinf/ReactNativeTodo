/**
 * Created by stylehopper on 2.07.16.
 */
import React from 'react';
import {
  ViewContainer,
  View,
  Text
} from 'react-native';

// import GoBack from '../components/Common/GoBack';
import ReduxApp from '../containers/app';

class CounterScreen extends React.Component {
  render() {
    return (
      <View>
        <ReduxApp navigator={this.props.navigator} />
      </View>
    )
  }
}

export default CounterScreen;