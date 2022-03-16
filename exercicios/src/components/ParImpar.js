import React from 'react';
import {Text, View} from 'react-native';
import Estilo from './estilo';

export default props => {
  return (
    <View>
      <Text style={Estilo.grande}>O resultado é:</Text>
      {props.num % 2 === 0 ? (
        <Text style={Estilo.grande}>Par</Text>
      ) : (
        <Text style={Estilo.grande}>ímpar</Text>
      )}
    </View>
  );
};
