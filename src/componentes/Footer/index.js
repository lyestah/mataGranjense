import React , { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';

class Footer extends Component { 
	render() {
		return (
 			<View style={styles.containerFooter}>
		       <View style={styles.barFooter}>
		      {/*<Icon  name='ios-menu' type='ionicon'  color='#f50'  />
		      <Text>Animais Silvestres</Text>*/}
		      <Icon name='' type='ionicon' color='#00aced' />
		       <Icon name='ios-home' type='ionicon'  color='#00aced' />
		        <Icon name='ios-mail' type='ionicon' color='#00aced' />
		         <Icon name='ios-pin' type='ionicon' color='#00aced' />
		          <Icon name='ios-information-circle-outline' type='ionicon' color='#00aced' />
		           <Icon name='' type='ionicon' color='#00aced' />
      	</View>
      </View>
		)
	}
     
}
  
export default Footer;