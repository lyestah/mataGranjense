//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { PanoramaView } from 'react-native-360';
// import { VideoView } from 'react-native-360';

// import PanoramaView from './componentes/GVRPanorama'
import VideoView from './componentes/GVRVideo'



// create a component
export default class Paisagem2 extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <VideoView 
    style={{height:200,width:null}}
    video={{ uri:'https://raw.githubusercontent.com/googlevr/gvr-ios-sdk/master/Samples/VideoWidgetDemo/resources/congo.mp4',
             type: 'stereo'}}
    displayMode={'embedded'}
    volume={1}
    enableFullscreenButton
    enableCardboardButton
    enableTouchTracking
    hidesTransitionView
    enableInfoButton={false}              
/>   
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

