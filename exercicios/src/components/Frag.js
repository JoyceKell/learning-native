import React from 'react';
import {View, Text} from 'react-native';
import Estilo from './estilo';

export default props => {
  return (
    <View>
      <Text style={Estilo.grande}>{props.titulo}</Text>
      <Text>{props.subtitulo}</Text>
    </View>
  );
};
