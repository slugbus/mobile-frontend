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
import BusStopModal from '../busStopModal'
import BusModal from '../busModal'

var view = function () {

  return (
    <View>
      <View style={styles.logoContainer}>
        <Image alt="bus++" source={require('../../assets/mapIcons/Logo_2.png')} style={{ width: 135, height: 33.75 }} ></Image>

      </View>
      <View style={{ width: width, height: height }}>
        <MapView

          style={{ flex: 1, alignSelf: 'stretch' }}
          initialRegion={{
            latitude: 36.99005,
            longitude: -122.059510,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          minZoomLevel={14.76}
          zoomEnabled={true}
          zoomTapEnabled={true}
          moveOnMarkerPress={false}
        >

          <View>

            {this.state.markers.map((marker => {
              return <Marker
                tracksViewChanges={this.state.tracksViewChanges}
                onPress={() => this.markerPressed(marker)}
                key={marker.id}
                coordinate={marker.latlng}
                onLoad={()=> this.onMarkersLoad()}

              >
                <View
                  style={styles.markerContainer}>
                  {marker.type == null ?

                    <View

                    >
                      {marker.direction == "Inner" ?
                        <Image
                          source={BlueIcon} style={{ width: 30, height: 42 }} />
                        :
                        <Image

                          source={RedIcon} style={{ width: 30, height: 42 }} />

                      }
                    </View> :


                    <View>
                      {this.changeBusMarker(marker.angle)}
                    </View>
                  }
                </View>
              </Marker>



            }



            ))}
          </View>


        </MapView>

      </View>


      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.busStopVisible}
        onRequestClose={() => { console.log('close') }}
      >
        <BusStopModal setBusStopVisible={this.setBusStopVisible.bind(this)} clickedMarker={this.state.clickedMarker} />

      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.busInfoVisible}
        onRequestClose={() => { console.log('close') }}
      >
        <BusModal setBusStopVisible={this.setBusInfoVisible.bind(this)} clickedMarker={this.state.clickedMarker} />

      </Modal>

    </View>
  )

}


export default view;