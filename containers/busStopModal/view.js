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
const xIcon = require('../../assets/x-icon.jpg')
import { Dimensions } from 'react-native'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

var view = function () {

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.modalContainer}>
        <ImageBackground source={stopModalBackground} style={{ width: '100%', height: '100%', borderWidth: 1.5, borderColor: 'black', borderStyle: 'solid', borderRadius: 20, overflow: 'hidden', elevation: 10 }}>

          <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', flex: 1 , backgroundColor: '#225898'}}>
            <View style={{ display: 'flex', flexDirection: 'column', flex: 9, justifyContent: 'center', alignItems: 'center', paddingVertical: 8}}>
              {this.state.fontsLoaded ? (

                <Text style={{
                  fontSize: 20, textAlign: 'center', color: '#FFC145', fontFamily: 'Ubuntu', textShadowColor: 'rgba(0, 0, 0, 1)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 10
                }}>{this.props.clickedMarker.name}</Text>

              ) : null}
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: 10, alignContent: 'center', justifyContent: 'center',backgroundColor:'red',marginRight:10}}>
              
              <TouchableHighlight
               style={{paddingTop:10,paddingBottom:10,paddingRight:3,paddingLeft:3}}
                onPress={() => {
                  this.props.setBusStopVisible(false)
                }}
              >
                <Image style={{ width: 35, height: 35,borderRadius:35/2,borderWidth:1,borderColor:'black'}} source={xIcon} />
              </TouchableHighlight>
            
              


            </View>
          </View>
          <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', flex: 4 }}>

            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 350, height: 200, borderWidth: 10, borderColor: '#225898', borderStyle: 'solid' }} source={kerHall} />
            </View>

          </View>

          <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', marginVertical: 20, flex: 3 }}>

            <View style={{ display: 'flex', flexDirection: 'column', flex: 5, }}>
              {this.state.fontsLoaded ? (
                <Text style={{ textAlign: 'center', fontSize: 25, fontFamily: 'Lato', fontWeight: '200' }}>Walking Time</Text>

              )
                : null
              }
              <Text style={{ textAlign: 'center', fontSize: 65, color: '#225898', fontWeight: 'bold', }}>15</Text>
              <Text style={{ textAlign: 'center', fontSize: 23 }}>minutes</Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', flex: 5, }}>
              {this.state.fontsLoaded ? (
                <Text style={{ textAlign: 'center', fontSize: 25, fontFamily: 'Lato', fontWeight: '200' }}>Next Bus</Text>

              )
                : null
              }
              <Text style={{ textAlign: 'center', fontSize: 65, color: '#FFC145', fontWeight: 'bold' }}>15</Text>
              <Text style={{ textAlign: 'center', fontSize: 23 }}>minutes</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', marginVertical: 5, backgroundColor: '#FFC145', alignContent: 'flex-end', flex: 2, marginBottom: -5, borderTopColor: 'black', borderWidth: 1.5, borderStyle: 'solid', borderLeftColor: 'transparent', borderRightColor: 'transparent' }}>

            <View style={{ display: 'flex', flexDirection: 'column', flex: 3, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'white', padding: 7, borderWidth: 1, borderStyle: 'solid', borderRadius: 10, borderColor: 'dashed' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#33A532' }}>Empty</Text>
              </View>

            </View>
            <View style={{ display: 'flex', flexDirection: 'column', flex: 3, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 50, borderStyle: 'solid', borderColor: 'black', padding: 4 }}>

                <Image source={moderate} style={{ width: 65, height: 65 }} />
              </View>
            </View>
          </View>


        </ImageBackground>
      </View>



    </View>



  )

}


export default view;
