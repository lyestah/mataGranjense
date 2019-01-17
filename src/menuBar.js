import React, { Component } from 'react';
import Style from './componentes/style';

const menuBar = (props) => {
  render() {
    return (
      <View>
      	<View style={styles.bar}>
      <Text>voltar</Text>
      <Text>Animais Silvestres</Text>
      <Text>...</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default menuBar;