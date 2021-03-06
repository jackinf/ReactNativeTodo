// 'use strict';
//
// var React = require('react');
// var ReactNative = require('react-native');
// var { PropTypes } = React;
// var {
//   Image,
//   MapView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } = ReactNative;
//
// var regionText = {
//   latitude: '0',
//   longitude: '0',
//   latitudeDelta: '0',
//   longitudeDelta: '0'
// };
//
// class GoogleMapScreen extends React.Component{
//
//   constructor() {
//     this.super();
//
//
//
//     this.state = {
//       isFirstLoad: true,
//       mapRegion: undefined,
//       mapRegionInput: undefined,
//       annotations: []
//     };
//   }
//
//   render() {
//     return (
//       <View>
//         <MapView
//           style={styles.map}
//           onRegionChange={this._onRegionChange}
//           onRegionChangeComplete={this._onRegionChangeComplete}
//           region={this.state.mapRegion}
//           annotations={this.state.annotations}
//         />
//         <MapRegionInput
//           onChange={this._onRegionInputChanged}
//           region={this.state.mapRegionInput}
//         />
//       </View>
//     );
//   },
//
//   _getAnnotations(region) {
//     return [{
//       longitude: region.longitude,
//       latitude: region.latitude,
//       title: 'You Are Here',
//     }];
//   },
//
//   _onRegionChange(region) {
//     this.setState({
//       mapRegionInput: region,
//     });
//   },
//
//   _onRegionChangeComplete(region) {
//     if (this.state.isFirstLoad) {
//       this.setState({
//         mapRegionInput: region,
//         annotations: this._getAnnotations(region),
//         isFirstLoad: false,
//       });
//     }
//   },
//
//   _onRegionInputChanged(region) {
//     this.setState({
//       mapRegion: region,
//       mapRegionInput: region,
//       annotations: this._getAnnotations(region),
//     });
//   },
//
// });
//
// var styles = StyleSheet.create({
//   map: {
//     height: 150,
//     margin: 10,
//     borderWidth: 1,
//     borderColor: '#000000',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   textInput: {
//     width: 150,
//     height: 20,
//     borderWidth: 0.5,
//     borderColor: '#aaaaaa',
//     fontSize: 13,
//     padding: 4,
//   },
//   changeButton: {
//     alignSelf: 'center',
//     marginTop: 5,
//     padding: 3,
//     borderWidth: 0.5,
//     borderColor: '#777777',
//   },
// });