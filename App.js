import React, { Component } from 'react'
import {Platform,StyleSheet,Text,FlatList,Image,TouchableOpacity,View} from 'react-native'
import {DrawerNavigator} from 'react-navigation'
import {Container,Content,Header,Body,Icon} from 'native-base'
import {DrawerItems} from 'react-navigation'


import Splash from './src/Splash';
import Mata from './src/Mata';
import Animais from './src/Animais';
import Historia from './src/Historia';
import PagItem from './src/PagItem';
import Home from './src/Home';
import Paisagens from './src/Paisagens';
import Paisagem2 from './src/Paisagem2';

class App extends Component{
  render(){
    return(
      <Navegador />
      );
  }
}
const DrawerCustumer =(props) =>(
  <View style={styles.container}>
  <Container>
    <Header style={styles.head} >
      <Body>
        <Image style={styles.ImgaDraw} source={require('./src/img/logo.png')}/>
      </Body>
    </Header>
    <Content>
      <DrawerItems{...props}/>
    </Content>
  </Container>
  </View>
  )

const Navegador = DrawerNavigator({
  Splash:{screen:Splash,
    navigationOptions:{
      drawerLabel:() => null
    }},
  Home:{screen:Home},
  Historia:{screen:Historia},
  'Fauna Granjense':{screen:Animais},
  PagItem:{
  	screen:PagItem,
  	navigationOptions: {
  		drawerLabel: () => null
  	}
  },
  'Flora Granjense':{screen:Mata},
   'Paisagens Naturais':{screen:Paisagens},
   Paisagem2:{screen:Paisagem2}

},
{
    initialRouteName:'Splash',
    contentComponent:DrawerCustumer,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
    drawerBackgroundColor: 'yellow',
    drawerBackgroundColor: "transparent"
  })

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    // alignItems:'center'

  },
  head:{
    height:220,
    backgroundColor:'#fafafa'
  },
  ImgaDraw: {∏
    marginTop:0,
    width:210,
    height:156,
    resizeMode:'stretch',
    alignSelf:'center'

  }
});

export default Navegador;
console.disableYellowBox=true;


