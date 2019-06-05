import React from 'react';
import styles, { stylesObj } from './styles';
import { View, requireNativeComponent, Text, ScrollView, Image, TouchableHighlight, Alert } from 'react-native';
import Modal from "react-native-modal";
const BlueIcon = require('../../assets/mapIcons/Blue_Stop.png');
const RedIcon = require('../../assets/mapIcons/Red_Stop.png');
import { MapView, Permissions } from 'expo';
const Marker = MapView.Marker
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import BusStopModal from '../busStopModal'
import BusModal from '../busModal'
const PersonIcon = require('../../assets/mapIcons/personIcon.png')

var view = function () {

  return (
    <View>
      <View style={styles.logoContainer}>
        <Image alt="bus++" source={require('../../assets/mapIcons/Logo_2.png')} style={{ width: 135, height: 33.75 }} ></Image>

      </View>
      <View style={{ width: width, height: height, }}>
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
                onLoad={() => this.onMarkersLoad()}

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
            
            {this.state.userLocation.map((marker => {
              return <Marker
                key={marker.key}
                tracksViewChanges={this.state.tracksViewChanges}
                coordinate={marker.latlng}
                onLoad={() => this.onMarkersLoad()}
              >

                <View style={styles.markerContainer}>
                  {marker.latlng != null ?
                    <Image
                      source={PersonIcon} style={{ width: 40, height: 52 }} /> :
                      <Text>ANAL</Text>
                  }

                </View>
              </Marker>

            }




            ))}
          </View>


        </MapView>

      </View>


      <Modal

        isVisible={this.state.busStopVisible}
        animationIn={'bounceInDown'}
        animationOut={'bounceOutUp'}
        animationOutTiming={150}
        onBackButtonPress={() => this.setState({ busStopVisible: false })}
        onBackdropPress={() => this.setState({ busStopVisible: false })}
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