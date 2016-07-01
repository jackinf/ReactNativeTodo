/**
 * Created by jevgenir on 01/07/2016.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Navigator
} from 'react-native'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome';

import ViewContainer from '../components/Common/ViewContainer'
import StatusBarBackground from '../components/Common/StatusBarBackground'

class TodoIndexScreen extends Component {
  constructor(props) {
    super(props);
    this._goBack = this._goBack.bind(this);
  }

  render() {
    const { todo } = this.props;

    return (
      <ViewContainer style={{backgroundColor: todo.color}}>
        <StatusBarBackground style={{backgroundColor: "mistyrose"}}/>
        <TouchableOpacity onPress={this._goBack}>
          <Icon name="times" size={30} color="#900" />
        </TouchableOpacity>
        <View>
          <Text style={styles.todoTitle}>{`${_.capitalize(todo.title)}`}</Text>
          <Text style={styles.todoDescription}>{`${_.capitalize(todo.description)}`}</Text>
        </View>
      </ViewContainer>
    )
  }

  _goBack() {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  todoRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },

  todoTitle: {
    marginLeft: 25,
    fontSize: 20
  },

  todoDescription: {
    marginLeft: 25,
    marginTop: 30,
    fontSize: 16
  },

  todoMoreIcon: {
    color: "green",
    height: 10,
    width: 10,
    marginRight: 25
  }

});

export default TodoIndexScreen;