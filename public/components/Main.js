/**
 * Created by stylehopper on 1.07.16.
 */
import React from 'react';
import Relay from 'react-relay';

import {
  Navigator,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import AppNavigator from './../navigation/AppNavigator';

class Main extends React.Component {
  render() {
    return <AppNavigator initialRoute={{ ident: "TodoIndex" }} />;
  }
}

export default Relay.createContainer(Main, {
  fragments: {
    viewer: () => Relay.QL`
        fragment on User {
            widgets {
                edges {
                    node {
                        id, name
                    }
                }
            }
        }
    `
  }
});
