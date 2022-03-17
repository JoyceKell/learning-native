import React from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import produtos from './Produtos';

export default props => {
  return (
    <>
      <Text style={Estilo.grande}>Lista de Produtos:</Text>
      {produtos.map(p => {
        return <Text key={p.id}>{p.nome}</Text>;
      })}
    </>
  );
};
