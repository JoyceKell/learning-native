import React from 'react';
import {Text, View} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <>
      <Text style={Estilo.grande}>
        {props.nome} {props.sobrenome}
      </Text>
    </>
  );
};
