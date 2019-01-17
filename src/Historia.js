import React, { Component } from 'react';
import {Platform,StyleSheet,Text,FlatList,Image,TouchableOpacity,View} from 'react-native';
// import { Header } from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';

import Header from './componentes/Header';
import Footer from './componentes/Footer';

export default class Historia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descr: 'Utilizamos o método setSubmitting para indicar que não estamos'+
      'mais realizando o loading e o método setErrors para preencher a propriedade',
      flatData:[
      {key:"1",nome:'História',icone:'logo-buffer'},
      {key:"10",nome:'Prefeitos',icone:'md-person'},
      {key:"2",nome:'Primeiros habitantes',icone:'ios-leaf'},
      {key:"3",nome:'Visitantes ilustres',icone:'ios-man'},
      {key:"4",nome:'Clima',icone:'ios-partly-sunny'},
      {key:"5",nome:'Economia',icone:'logo-bitcoin'},
      {key:"6",nome:'Turismo',icone:'md-aperture'},
      {key:"7",nome:'Esporte',icone:'ios-football'},
      {key:"8",nome:'Arte',icone:'md-brush'},
      {key:"9",nome:'Mídia',icone:'md-camera'}
      
      ]
    };

  }
  
  flatRender(item){
    return(
      <TouchableOpacity onPress={() => this.props.navigation.navigate('PagItem',item)}>
        <View style={styles.flat}>
          
           <View style={styles.areaConteudo}>
           <Text style={styles.linha} ></Text>
           <Icon  name={item.icone} type='ionicon'  color='#04836f' style={styles.iconeFlat}  />
          <View style={styles.textoDes}>
          <Text style={styles.titulo}>{ item.nome}</Text>
          <Text style={styles.desc}>{ this.state.descr}</Text>
          </View>
           
            </View>
        </View>
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
  areaConteudo:{
    flex:1,
    marginTop: 5,
    flexDirection:'row',
  },
  flat:{
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#e6f8f5',
    height:'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:5,
    marginRight:5,
    marginBottom: 3,
    marginTop: 3,
    borderColor: '#fff',
    borderBottomColor: '#888',
  },
  textoDes:{
    flex:1,
    flexDirection: 'column',
    marginLeft:20
  },
  linha:{
    borderColor: 'transparent',
    borderWidth: 2,
    marginLeft:2,
    marginRight: 5,
  },
  titulo:{
   fontSize:20,
   fontWeight:'bold',
   color: '#04836f'
  },
   desc: {
    fontSize:12,
    color: '#084037',
    
  },
  iconeFlat:{
    width:50,
    height:50,
    borderRadius:25,
    padding:10
  },
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
    width:70,
    height:70,
    padding:10,
    marginLeft:130,
    borderRadius:35,
    borderWidth:1,
    borderColor:'#fff',
    resizeMode:'cover',
  }
});
