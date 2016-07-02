/**
 * Created by stylehopper on 2.07.16.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import realm from '../../server/realmSchema';

class RealmIndexScreen extends Component {
  constructor() {
    super();
    this._addItem = this._addItem.bind(this);
    this._removeAllItems = this._removeAllItems.bind(this);

    this.state = { changed: true };
  }

  _addItem() {
    realm.write(() => {
      realm.create('Dog', { name: 'Rex' });
    });
    this.setState({state: true});
  }

  _removeAllItems() {
    realm.write(() => {
      var dogs = realm.objects('Dog');
      realm.delete(dogs);
    });
    this.setState({state: true});
  }

  render() {
    return (<View style={styles.container}>
      <TouchableOpacity onPress={e => this.props.navigator.pop()}>
        <Icon name="home" size={30} color="#900" />
      </TouchableOpacity>
      <TouchableOpacity onPress={this._addItem}>
        <Text>Add item <Icon name="plus" size={30} color="#900" /></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._removeAllItems}>
        <Text>Remove all items <Icon name="minus" size={30} color="#900" /></Text>
      </TouchableOpacity>
      <Text style={styles.welcome}>
        Count of Dogs in Realm: {realm.objects('Dog').length}
      </Text>
    </View>);
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

export default RealmIndexScreen;