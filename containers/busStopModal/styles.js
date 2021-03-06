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
      },
      closeButton:{
        backgroundColor:'red',
        width:'100%',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        borderTopColor: 'rgba(226, 226, 226, 0.5)',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
      },
      busStopName:{
        fontSize:25,
        fontFamily:'Pacifico'
      },
  
      modalContainer: {
        height: "77%",
        display:'flex',
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',

    },
    backgroundImage:{
      overflow:'hidden',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor:'black',
      borderRadius: 20,
     
     

    },
      modalWrap:{
       
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center', 
      
      },
      column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: 1
        
      },
      row :{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
      },
      blueColumn :{
        backgroundColor: 'blue',
        height: '50%',
      },
      
      greenColumn:{
        backgroundColor: 'green',
        height: '50%'
      }
  
});

export default styles;
