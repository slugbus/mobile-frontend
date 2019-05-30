import React from 'react-native';
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

var styles = React.StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1,
        alignItems:'center',
        marginTop: 24
      },
      markerContainer: {
    
    
      },
      rotateBus:{
         transform:[{rotate:'20deg'}]
      },
      logoContainer: {
        
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, .75)',
        padding: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 5,
        textAlign: 'center',
        fontFamily: 'Roboto',
        lineHeight: 30,
        paddingLeft: 10,
        zIndex: 5
    
      },
      busIcon: {  
        width:50,
        height:75   
      }
  
});

export default styles;
