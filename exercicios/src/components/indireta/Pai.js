import React, {useState} from 'react';
import Filho from './Filho';
import {Text} from 'react-native';

export default props => {
  [num, setNum] = useState(0);

  function exibirValor(numero) {
    setNum(numero);
  }
  return (
    <>
      <Text>numero: {num}</Text>
      <Filho min={1} max={10} funcao={exibirValor} />
    </>
  );
};
