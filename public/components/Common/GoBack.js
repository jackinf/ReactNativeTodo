/**
 * Created by stylehopper on 2.07.16.
 */
import React from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

class GoBack extends React.Component {
  // propTypes: {
  //   navigator: React.PropTypes.object.isRequired
  // }

  render() {
    const { navigator } = this.props;

    return (<TouchableOpacity onPress={(event) => navigator.pop()}>
      <Text>Go back</Text>
    </TouchableOpacity>);
  }
}

export default GoBack;