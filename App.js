import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapComponent from './containers/mapComponent'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    }
  }



  render() {
    return (
      <View>
        <MapComponent/>
      </View>

    );
  }
}

