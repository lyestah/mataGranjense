
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,Image,
  Text,ScrollView,
  View
} from 'react-native';
import Header from './componentes/Header';
import GoogleVRPanorama, { PanoramaView } from 'react-native-google-vr-panorama'


export default class Image3d extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const imageUrl = 'http://www.google.com/image.jpg'
    const inputType = GoogleVRPanorama.inputType.stereo
    
    return (
        <PanoramaView imageUrl={imageUrl} inputType={inputType} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  cont:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  },
  txtdestaque:{
    fontSize: 15,
    color:'#877',
    marginLeft: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  destaque: {
    height:150,
    width:'100%',
    resizeMode:'cover' ,
    backgroundColor:'#ccc'  
  }

});
