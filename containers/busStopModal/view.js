import React from 'react';
import styles, { stylesObj } from './styles';
import { View, requireNativeComponent, Text, ScrollView, Image, Modal, TouchableHighlight, Alert } from 'react-native';
const BlueIcon = require('../../assets/mapIcons/Blue_Stop.png');
const RedIcon = require('../../assets/mapIcons/Red_Stop.png');
import { MapView, Permissions } from 'expo';
const Marker = MapView.Marker
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

var view = function () {

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
      <View style={styles.modalContainer}>
        <View>
          {this.state.fontLoaded ? (
            <Text style={{ fontFamily: 'Pacifico',fontSize:20 }}>{this.props.clickedMarker.name}</Text>
          ) : null}
        </View>
        <TouchableHighlight
          style={styles.closeButton}
          onPress={() => {
            this.props.setBusStopVisible(false)
          }}>
          <Text>Close Modal</Text>
        </TouchableHighlight>
      </View>
    </View>
  )

}


export default view;