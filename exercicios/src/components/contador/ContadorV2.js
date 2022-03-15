import React, {useState} from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import ContadorDisplay from './ContadorDisplay';
import ContadorAction from './ContadorAction';

export default props => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);
  return (
    <>
      <Text style={Estilo.grande}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorAction inc={inc} dec={dec} />
    </>
  );
};
