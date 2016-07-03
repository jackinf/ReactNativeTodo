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
} from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

import ViewContainer from '../components/Common/ViewContainer';
import StatusBarBackground from '../components/Common/StatusBarBackground';
import { getAll } from '../../server/database';

class TodoIndexScreen extends Component {
  constructor(props) {
    super(props);

    this._navigateToTodoShow = this._navigateToTodoShow.bind(this);
    this._navigateToRealmScreen = this._navigateToRealmScreen.bind(this);
    this._navigateToReduxScreen = this._navigateToReduxScreen.bind(this);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    var todosCollection = getAll();
    this.state = {todosDataSource: ds.cloneWithRows(todosCollection)};
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: "mistyrose"}}/>
        <TouchableOpacity onPress={(event) => this._navigateToRealmScreen() }>
          <Text>Realm demo <Icon name="rocket" size={30} color="#900" /></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={(event) => this._navigateToReduxScreen() }>
          <Text>Redux demo <Icon name="glass" size={30} color="#393" /></Text>
        </TouchableOpacity>
        <ListView
          style={{marginTop: 100}}
          initialListSize={10}
          dataSource={this.state.todosDataSource}
          renderRow={(todo) => { return this._renderTodoRow(todo) }}/>
      </ViewContainer>
    )
  }

  _renderTodoRow(todos) {
    return (
      <TouchableOpacity style={styles.todoRow} onPress={(event) => this._navigateToTodoShow(todos) }>
        <Text style={styles.todoTitle}>{`${_.capitalize(todos.title)} - ${_.capitalize(todos.color)}`}</Text>
        <View style={{flex: 1}}/>
        <Icon name="chevron-right" size={10} style={styles.todoMoreIcon}/>
      </TouchableOpacity>
    )
  }

  _navigateToTodoShow(todo) {
    this.props.navigator.push({
      ident: "TodoShow",
      todo
    });
  }

  _navigateToRealmScreen() {
    this.props.navigator.push({ident: 'RealmIndexScreen'});
  }

  _navigateToReduxScreen() {
    this.props.navigator.push({ident: 'CounterScreen'});
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  todoRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },

  todoTitle: {
    marginLeft: 25
  },

  todoMoreIcon: {
    color: "green",
    height: 10,
    width: 10,
    marginRight: 25
  }

});

export default TodoIndexScreen;