import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Estilo from '../estilo';

export default ({num}) => {
  return (
    <View style={style.Container}>
      <Text style={[Estilo.grande, style.Num]}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    backgroundColor: '#000',
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 25,
  },
  Num: {
    color: '#fff',
  },
});
