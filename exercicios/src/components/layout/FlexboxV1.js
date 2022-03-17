import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV1}>
      <Quadrado color="#FFF" />
      <Quadrado color="#F00" />
      <Quadrado color="#0F0" />
      <Quadrado color="#009" />
      <Quadrado color="#F09" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV1: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'space-between',
  },
});
