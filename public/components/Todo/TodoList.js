/**
 * Created by stylehopper on 28.06.16.
 */

import React from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  Stylesheet,
  Alert
} from 'react-native'

import Button from './../Common/Button';

const rows = [
  { id: '1', title: 'Todo 1', description: 'I must do something' },
  { id: '2', title: 'Todo 2', description: 'I must do something' },
  { id: '3', title: 'Todo 3', description: 'I must do something' },
  { id: '4', title: 'Todo 4', description: 'I must do something' },
  { id: '5', title: 'Todo 5', description: 'I must do something' },
  { id: '6', title: 'Todo 6', description: 'I must do something' }
];
var lastRowNr = 6;
//
// const styles = Stylesheet.create({
//
// });

// const rowsTitles = rows.map(row => row.title);

class TodoList extends React.Component {

  constructor() {
    super();

    this.getListView = this.getListView.bind(this);
    this.onPressRow = this.onPressRow.bind(this);
    this.onPressStartAddTodo = this.onPressStartAddTodo.bind(this);

    const ds = this.getListView();
    this.state = { dataSource: ds.cloneWithRows(rows) };
  }

  getListView() {
    return new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  onPressRow(rid) {
    // Alert.alert(
    //   'Alert Title',
    //   'My Alert Msg',
    //   [
    //     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: 'OK', onPress: () => console.log('OK Pressed')},
    //   ]
    // )
    rows.splice(rid, 1);
    this.setState({ dataSource: this.getListView().cloneWithRows(rows)} );
  }

  onPressStartAddTodo() {
    lastRowNr++;
    rows.push({
      id: lastRowNr,
      title: `Todo ${lastRowNr}`,
      description: 'I must do something'
    });
    this.setState({
      dataSource: this.getListView().cloneWithRows(rows)
    })
  }

  renderRow = (todo, sid, rid) => {
    return (
      <TouchableHighlight onPress={e => this.onPressRow(rid)}>
        <Text>{todo.title}</Text>
      </TouchableHighlight>
    )
  };

  render() {
    return (
      <View>
        <View>
          <Button onPress={this.onPressStartAddTodo} />
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
}

export default TodoList;