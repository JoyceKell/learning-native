import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';

export default props => {
  return (
    <>
      <Text style={Estilo.grande}>no componente filho{props.a}</Text>
      <Text style={Estilo.grande}>{props.b}</Text>
    </>
  );
};
