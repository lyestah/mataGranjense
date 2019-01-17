import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {
  StyleSheet,
  View,Text
} from 'react-native';

export default class Icone extends Component {
  render() {
    return (
      <View >
      <Icon name="rocket" size={30} color="#900" />
      <IonIcon name="ios-menu" size={30} color="blue"/>
      <IonIcon name="md-menu" size={30} color="blue"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
