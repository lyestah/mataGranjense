
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,Image,
  Text,ScrollView,
  View
} from 'react-native';
import Header from './componentes/Header';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    	 <View style={styles.container}>
       <Header navigation={this.props.navigation} />  
       <ScrollView>
       <View style={styles.cont}>
       <View style={styles.info}>
            <Text style={styles.txtdestaque}>Ultimas Noticias</Text>
            <Text>Heart</Text>
       </View>
       
        <Image source={require('./img/destaque.png')} style={styles.destaque}/>
        
        <View style={styles.destaqueMenor} >
        </View>
        </View>
        </ScrollView>
       </View>
    );
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
  alignItems: 'flex-start',
  },
  txtdestaque:{
    marginTop: 2,
    fontSize: 15,
    color:'#877',
    marginLeft: 20,
    // fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  destaque: {
    height:150,
    width:'100%',
    resizeMode:'cover' ,
    backgroundColor:'#ccc'  
  },
teste:{
  padding: 10,
  height:100,
  width:'100%',
  borderWidth: 1,
  borderColor: '#ccc',
  elevation:1,
 
}

});
