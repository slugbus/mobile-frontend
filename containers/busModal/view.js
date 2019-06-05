import React from 'react';
import styles, { stylesObj } from './styles';
import {ImageBackground, View, requireNativeComponent, Text, ScrollView, Image, Modal, TouchableHighlight, Alert } from 'react-native';
const BlueIcon = require('../../assets/mapIcons/Blue_Stop.png');
const stopModalBackground = require('../../assets/backgrounds/stopBackground.png');

const RedIcon = require('../../assets/mapIcons/Red_Stop.png');
import { MapView, Permissions } from 'expo';
const Marker = MapView.Marker
import { Dimensions } from 'react-native'
const xIcon = require('../../assets/backgrounds/exit.png')
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

var view = function () {

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.modalContainer}>
      <ImageBackground source={stopModalBackground} style={{ width: '100%', height: '100%', borderWidth: 1.5, borderColor: 'black', borderStyle: 'solid', borderRadius: 20, overflow: 'hidden', elevation: 10 }}>


        <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', flex: 1, backgroundColor: '#225898', borderBottomColor: 'black', borderBottomWidth: 1.5, bordeStyle: 'solid' }}>

          <View style={{ display: 'flex', flexDirection: 'column', flex: 9, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{
              fontSize: 22, textAlign: 'center', color: '#FFC145', textShadowColor: 'rgba(0, 0, 0, 1)',
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10
            }}>{this.props.clickedMarker.type} Bus #{this.props.clickedMarker.id}</Text>


          </View>
          <View style={{ display: 'flex', flexDirection: 'column', flex: 1, alignContent: 'flex-start', justifyContent: 'center',marginRight:20 }}>

            <TouchableHighlight
              style={{ paddingTop: 1, paddingBottom: 1,  }}
              onPress={() => {
                this.props.setBusStopVisible(false)
              }}
            >
              <Image style={{ width: 35, height: 35, borderRadius: 35 / 2, borderWidth: 1, borderColor: 'black', backgroundColor: 'rgba(0,0,0,.2)' }} source={xIcon} />
            </TouchableHighlight>


          </View>
        </View>
        <View style={{ flex: 3, flexDirection: 'row', display: 'flex', justifyContent: 'center',  alignContent: 'stretch', marginBottom: -5, borderTopColor: 'black', borderWidth: 1.5, borderStyle: 'solid', borderLeftColor: 'transparent', borderRightColor: 'transparent', padding: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'column', flex: 5, justifyContent: 'center' }}>
              {this.state.fontsLoaded ? (
                <Text style={{ textAlign: 'center', textAlignVertical: 'top', fontSize: 26, fontFamily: 'Lato', fontWeight: '200' }}>Next Bus</Text>

              )
                :                 <Text style={{ textAlign: 'center', textAlignVertical: 'top', fontSize: 26, fontWeight: '200' }}>Next Bus</Text>

              }
              <Text style={{
                textAlign: 'center', fontSize: 68, color: '#FFC145', fontWeight: 'bold', textShadowColor: 'rgba(0, 0, 0, 1)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
              }}>15</Text>
              <Text style={{ textAlign: 'center', fontSize: 23 }}>minutes</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', flex: 5, justifyContent: 'center' }}>
              {this.state.fontsLoaded ? (
                <Text style={{ textAlign: 'center', textAlignVertical: 'top', fontSize: 26, fontFamily: 'Lato', fontWeight: '200' }}>Next Bus</Text>

              )
                :                 <Text style={{ textAlign: 'center', textAlignVertical: 'top', fontSize: 26, fontWeight: '200' }}>Next Bus</Text>

              }
              <Text style={{
                textAlign: 'center', fontSize: 68, color: '#FFC145', fontWeight: 'bold', textShadowColor: 'rgba(0, 0, 0, 1)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
              }}>15</Text>
              <Text style={{ textAlign: 'center', fontSize: 23 }}>minutes</Text>
            </View>

        </View>





        </ImageBackground>
      </View>

    </View>

  )

}


export default view;