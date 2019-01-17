import React, { Component } from 'react';
import {Platform,StyleSheet,Text,FlatList,Image,TouchableOpacity,View} from 'react-native';
// import { Header } from 'react-native-elements';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

export default class Paisagens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal:'Tatu',
      descri:'Como uma bela borboleta de cores fortes você voa de jardim em jardim, tão linda a irmã, leva consigo os pólens de um pro outro e ajudam a brotar, caráter, força, determinação, garra!',
      flatData:[
      {key:"1",nome:'Cachoeira dos Macacos',descricao:'',idade:40,foto:'https://i.ytimg.com/vi/HaTCBpJQFBU/hqdefault.jpg'},
      {key:"2",nome:'Piriquara',descricao:' {this.state.descri}',idade:40,foto:'http://2.bp.blogspot.com/_7fsdlET8i0M/SSDaHQWCqkI/AAAAAAAAA5U/RsKk-qzqNrw/s400/piriquara.jpg'},
      {key:"3",nome:'Ponte Metalica',descricao:' {this.state.descri}',idade:40,foto:'http://farm7.static.flickr.com/6046/6320675192_cdde5587aa.jpg'}
      ]
    };
    this.clic=this.clic.bind(this);
  }
  
  flatRender(item){
    return(
      <TouchableOpacity onPress={() => this.props.navigation.navigate('PagItem',item)}>
        <View style={styles.flat}>
          <Image style={styles.img} source={{uri:item.foto}}/>
           <View style={styles.areaConteudo}>
          <Text style={styles.titulo}>{item.nome}</Text>
         <Text style={styles.desc}>{this.state.descri}</Text>
          <Text style={styles.linha} ></Text>
      </View>
      </View>
      </TouchableOpacity>
      
      );
  }
clic(){
  alert("Clicou!!!!");
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