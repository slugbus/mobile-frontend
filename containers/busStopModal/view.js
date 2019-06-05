import React from 'react';
import styles, { stylesObj } from './styles';
import { View, requireNativeComponent, Text, ImageBackground, TouchableHighlight, Image } from 'react-native';
const BlueIcon = require('../../assets/mapIcons/Blue_Stop.png');
const RedIcon = require('../../assets/mapIcons/Red_Stop.png');
import { MapView, Permissions } from 'expo';
const Marker = MapView.Marker
const stopModalBackground = require('../../assets/backgrounds/stopBackground.png');
const placeholder = require('../../assets/backgrounds/placeholderImage.jpg')
const kerHall = require('../../assets/backgrounds/ker-hall.jpg')
const moderate = require('../../assets/backgrounds/moderate.png')
const xIcon = require('../../assets/backgrounds/exit.png')
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
import FontAwesome, { Icons } from 'react-native-fontawesome';

var view = function () {

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.modalContainer}>
        <ImageBackground source={stopModalBackground} style={{ width: '100%', height: '100%', borderWidth: 1.5, borderColor: 'black', borderStyle: 'solid', borderRadius: 20, overflow: 'hidden', elevation: 10 }}>

          <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', flex: 1, backgroundColor: '#225898', borderBottomColor: 'black', borderBottomWidth: 1.5, bordeStyle: 'solid', padding: 5 }}>
            <View style={{ display: 'flex', flexDirection: 'column', flex: 9, justifyContent: 'center', alignItems: 'center', paddingVertical: 8 }}>
              {this.state.fontsLoaded ? (

                <Text style={{
                  fontSize: 22, textAlign: 'center', color: '#FFC145', fontFamily: 'Ubuntu', textShadowColor: 'rgba(0, 0, 0, 1)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 10
                }}>{this.props.clickedMarker.name}</Text>

              ) : null}
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: 5, alignContent: 'center', justifyContent: 'center', marginRight: 10 }}>

              <TouchableHighlight
                style={{ paddingTop: 1, paddingBottom: 1, paddingRight: 3, paddingLeft: 3 }}
                onPress={() => {
                  this.props.setBusStopVisible(false)
                }}
              >
                <Image style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 1, borderColor: 'black', backgroundColor: 'rgba(0,0,0,.2)' }} source={xIcon} />
              </TouchableHighlight>


            </View>
          </View>

          <View style={{ flex: 4, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>

            <ImageBackground style={{ flex: 1, display: 'flex', alignItems: 'stretch', justifyContent: 'flex-end', width: 367, height: 212 }} source={kerHall} >

              {this.state.fontsLoaded ? (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor: 'rgba(34, 88, 152, 0.5);', paddingVertical: 5 }}>
                  <Text style={{ fontSize: 23, fontFamily: 'Ubuntu', color: '#FFC145', marginLeft: 5, fontWeight: '500' }}>{this.props.clickedMarker.direction} Loop</Text>

                </View>

              )
                : null
              }
            </ImageBackground>

          </View>

          <View style={{ flex: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderWidth: 1.5, borderBottomColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent' }}>

            <View style={{ display: 'flex', flexDirection: 'column', flex: 5, justifyContent: 'center' }}>
              {this.state.fontsLoaded ? (
                <Text style={{ textAlign: 'center', textAlignVertical: 'top', fontSize: 26, fontFamily: 'Lato', fontWeight: '200' }}>Walking Time</Text>

              )
                : null
              }
              <Text style={{
                textAlign: 'center', fontSize: 68, color: '#225898', fontWeight: 'bold', textShadowColor: 'rgba(0, 0, 0, 1)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
              }}>15</Text>
              <Text style={{ textAlign: 'center', fontSize: 23 }}>minutes</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', flex: 5, justifyContent: 'center' }}>
              {this.state.fontsLoaded ? (
                <Text style={{ textAlign: 'center', textAlignVertical: 'top', fontSize: 26, fontFamily: 'Lato', fontWeight: '200' }}>Next Bus</Text>

              )
                : null
              }
              <Text style={{
                textAlign: 'center', fontSize: 68, color: '#FFC145', fontWeight: 'bold', textShadowColor: 'rgba(0, 0, 0, 1)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
              }}>15</Text>
              <Text style={{ textAlign: 'center', fontSize: 23 }}>minutes</Text>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', backgroundColor: '#225898', alignContent: 'flex-end', marginBottom: -5, borderTopColor: 'black', borderWidth: 1.5, borderStyle: 'solid', borderLeftColor: 'transparent', borderRightColor: 'transparent', padding: 10 }}>

            <View style={{ display: 'flex', flexDirection: 'column', flex: 3, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'white', padding: 7, borderWidth: 1, borderStyle: 'solid', borderRadius: 10, borderColor: 'dashed' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#33A532' }}>Empty</Text>
              </View>

            </View>
            <View style={{ display: 'flex', flexDirection: 'column', flex: 3, justifyContent: 'center', alignItems: 'center', marginBottom: 3 }}>
              <View style={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 50, borderStyle: 'solid', borderColor: 'black', padding: 3 }}>

                <Image source={moderate} style={{ width: 55, height: 55 }} />
              </View>
            </View>
          </View>


        </ImageBackground>
      </View>

    </View>


  )

}

export default view;
