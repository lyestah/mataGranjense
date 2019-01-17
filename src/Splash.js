
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,ImageBackground,Dimensions,
  View
} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  componentDidMount(){
    setTimeout(()=>{
        const { navigate } = this.props.navigation;
        navigate('Home');
    },2000)
}

  render() {
    return (
    	 <View style={styles.container}>
    	<ImageBackground source={require('./img/bg1.jpg')} style={styles.bg}  >
      </ImageBackground>
       </View>
    );
  }
}
// const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  welcome: {
    fontSize: 20,
    marginTop:250,
    textAlign: 'center',
    margin: 10,
    color:'#ccc'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bg:{
  	flex:1,
  	width:null,
  	height:null
  },
  copyPequeno:{
  	fontSize: 12,
    textAlign: 'center',
    color:'#fff'
  },
  copy:{
  	fontSize: 14,
    marginTop:310,
    textAlign: 'center',
    color:'#fff'
  }
});
