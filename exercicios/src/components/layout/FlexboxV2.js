import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV2}>
      <Quadrado color="#FF1" />
      <Quadrado color="#F00" />
      <Quadrado color="#0F0" />
      <Quadrado color="#009" />
      <Quadrado color="#F09" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});
