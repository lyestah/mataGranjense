import React, { Component } from 'react';
import {Platform,StyleSheet,Text,FlatList,Image,TouchableOpacity,View} from 'react-native';
// import { Header } from 'react-native-elements';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

export default class Animais extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
      animal:'Tatu',
      descri:'Como uma bela borboleta de cores fortes você voa de jardim em jardim, tão linda a irmã, leva consigo os pólens de um pro outro e ajudam a brotar, caráter, força, determinação, garra!',
	  	flatData:[
	  	{key:"1",nome:'Canário do Reino',descricao:'',idade:40,foto:'http://fazendavisconde.com.br/images/Carduelis_Yarrellii_Pintassilgo_Bahianinho_nordeste_Passaro_Ornamental_-2.jpg'},
	  	{key:"2",nome:'Peixe-Boi',descricao:' {this.state.descri}',idade:40,foto:'https://i.ytimg.com/vi/wppeJBjurpY/hqdefault.jpg'},
	  	{key:"3",nome:'Periquito',descricao:' {this.state.descri}',idade:40,foto:'http://cpu90.ifc-camboriu.edu.br/criacac/tiki-download_file.php?fileId=2152&display'},
	  	{key:"4",nome:'Currupião',descricao:' {this.state.descri}',idade:40,foto:'https://vivimetaliun.files.wordpress.com/2016/05/901bb-gian2b4.jpg?w=444'},
	  	{key:"5",nome:'Cassaco',descricao:' {this.state.descri}',idade:40,foto:'https://brasilbiomas.files.wordpress.com/2011/06/fauna9.jpg'},
	  	{key:"6",nome:'Cabeça de Fita',descricao:'{this.state.descri}',idade:40,foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwea7Uzp37DT1aBIuqhtSSTYJZHYugELHq-PpmEMrHQzoLPUoG'}
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
  bar:{
    height:40,
    flexDirection : 'row',
    alignItems :'center',
    backgroundColor:'#fff',
    justifyContent: 'space-between',
    backgroundColor:'#dedede'
  },
  areaConteudo:{
    flex:1,
    flexDirection:'column',
  },
  corHeader:{
    backgroundColor:'#000'
  },
  flat:{
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
      
    // flex:1,
    // flexDirection:'row',
  	// height:'auto',
  	// backgroundColor: '#f9f9f9',
    // borderWidth : 0.5,
  	// borderColor:'#ccc',
  	// margin:4,
  	// marginBottom:5,
    // marginTop:5,
  	// margin:10
 
  },
  titulo:{
	 fontSize: 20,
   fontWeight: 'bold',
	color: '#04836f'
  },
   desc: {
    fontSize: 12,
    color: '#084037',
    
  },
  // linha:{
 // borderBottomColor: '#ccc',
 // borderBottomWidth: 1 ,
  // },
  flatItem:{
  		width:'100%',
  		fontSize:18,
  		height:40,
  		margin:10
  },
  imgArea:{
    flexDirection:'row'
  },
  img:{
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
