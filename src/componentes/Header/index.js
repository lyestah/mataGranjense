import React , { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';

class Header extends Component { 
	render() {
		return (
 			<View style={styles.vie} >
		       <View style={styles.bar}>
			   <View style={styles.ico}>
		      <Icon  name='ios-menu' type='ionicon'  color='#fff' onPress={() =>this.props.navigation.openDrawer()} />
				</View>
		  </View>
      </View>
		)
	}
     
}
  
export default Header;