import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,FlatList,Image,TouchableOpacity,
  View
} from 'react-native';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

export default class Mata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal:'Tatu',
      descri:'Como uma bela borboleta de cores fortes você voa de jardim em jardim, tão linda a irmã, leva consigo os pólens de um pro outro e ajudam a brotar, caráter, força, determinação, garra!',
      flatData:[
      {key:"1",nome:'Pau Darco',descricao:'',idade:40,foto:'http://1.bp.blogspot.com/-F_-OCQjPe6Q/UWCOUjY9sTI/AAAAAAAAAvs/PdtinK398Qs/s1600/ip%C3%AA.jpg'},
      {key:"2",nome:'Umbuzeiro',descricao:'Bebidas ',idade:40,foto:'http://4.bp.blogspot.com/-5JWP8Qqc6Tc/UWHLo8bc5EI/AAAAAAAAAwA/t4PkOPBaoF4/s1600/DSC06737.jpg'},
      {key:"3",nome:'Pereiro',descricao:'Transportes ',idade:40,foto:'http://4.bp.blogspot.com/-sm-P1x516FI/UWLcJRGiIxI/AAAAAAAAAx4/3P2ETRi-tRc/s1600/pereiro+florado.jpg'},
      {key:"4",nome:'Mandacarú',descricao:'Telefenos ',idade:40,foto:'http://2.bp.blogspot.com/-urg5KWzt7MI/UWbOiB40_hI/AAAAAAAAAzI/5ZpAc6Vf3ls/s1600/DSC01553.JPG'},
      {key:"5",nome:'Juazeiro',descricao:'Internet ',idade:40,foto:'http://2.bp.blogspot.com/-cLrMHEBh-9g/UWbcNOkLQJI/AAAAAAAAAzg/d92D2G7Ebp0/s1600/DSC07389.JPG'},
      ]
    };
  }
 
  flatRender(item){
    return(
      <TouchableOpacity onPress={() => this.props.navigation.navigate('PagItem',item)}>
        <View style={styles.flat}>
          <Image style={styles.img} source={{uri:item.foto}}/>
           <View style={styles.areaConteudo}>
          <Text style={styles.titulo}>{item.nome}</Text>
        <Text>{this.state.descri}</Text>
      </View></View>
      </TouchableOpacity>
      
      );
  }

  render() {
    return (
      <View style={styles.container}>
      <Header navigation={this.props.navigation} />  
       <FlatList data={this.state.flatData}  renderItem={({item})=>this.flatRender(item)}/>
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
  bar: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    backgroundColor: '#dedede'
  },
  areaConteudo: {
    flex: 1,
    flexDirection: 'column',
  },
  corHeader: {
    backgroundColor: '#000'
  },
  flat: {
    padding: 10,
      flexDirection: 'row',
      backgroundColor: '#e6f8f5',
      height: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 3,
      marginTop: 3,

  },
  titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#04836f'
    },
    desc: {
      fontSize: 12,
      color: '#084037',

    },
  flatItem: {
    width: '100%',
    fontSize: 18,
    height: 40,
    margin: 10
  },
  imgArea: {
    flexDirection: 'row'
  },
  img: {
    width: 80,
      height: 80,
      padding: 10,
      margin: 13,
      borderRadius: 50,
      borderWidth: 2.5,
      borderColor: '#00d2b1',
      resizeMode: 'cover',
  }
});