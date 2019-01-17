import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,FlatList,Image,TouchableOpacity,
  View
} from 'react-native';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

export default class PagItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
       descri:'Como uma bela borboleta de cores fortes você voa de jardim em jardim, tão linda a irmã, leva consigo os pólens de um pro outro e ajudam a brotar, caráter, força, determinação, garra!',
      
    };

   
  }
 

  render() {
  	let dados = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
      <Header navigation={this.props.navigation} />  
      <View style={styles.visual}>
      <Image style={styles.imgPagItem} source={{uri:dados.foto}}/>
       <Text style={styles.titulo} >{dados.nome}</Text>
        <Text style={styles.desc} >{this.state.descri}</Text>
      </View>
      <Footer />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    
  },
  bar:{
    height:40,
    flexDirection : 'row',
    alignItems :'center',
    backgroundColor:'#fff',
    justifyContent: 'space-between',
    backgroundColor:'#dedede'
  },
  visual:{
flex:1,
margin:10
  },
  imgPagItem:{
    width:null,
    height:300,
    padding:10,
    margin:13,
    
    borderWidth:1,
    borderColor:'#fff',
    resizeMode:'cover',
  },
  titulo:{
   fontSize:22,
   fontWeight:'bold'
  },
   desc: {
    fontSize:12,
    color: '#000',
    
  }
});
