import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV3}>
      <Quadrado color="#FF1" />
      <Quadrado color="#F00" />
      <Quadrado color="#0F0" />
      <Quadrado color="#009" />
      <Quadrado color="#F09" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV3: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 350,
    width: '100%',
    backgroundColor: '#fff',
  },
});
