import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Mega from '../components/mega/Mega';
//import FlexboxV4 from '../components/layout/FlexboxV4';
//import FlexboxV3 from '../components/layout/FlexboxV3';
//import FlexboxV2 from '../components/layout/FlexboxV2';
//import FlexboxV1 from '../components/layout/FlexboxV1';
//import DigiteSeuNome from '../components/DigiteSeuNome';
//import ListaProdutos from '../components/produtos/ListaProdutos';
//import Pai from '../components/relacao/Pai';
//import Filho from '../components/relacao/Filho';
//import ParImpar from '../components/ParImpar';
//import ContadorV2 from '../components/contador/ContadorV2';
//import Pai from '../components/indireta/Pai';
//import Pai from '../components/direta/Pai';
//import Contador from '../components/Contador';
//import Botao from '../components/Botao';
//import Frag from '../components/Frag';
//import Minmax from '../components/Minmax';
//import Aleatorio from '../components/Aleatorio';
//import Primeiro from '../components/Primeiro';
//import {Comp2, Comp3} from '../components/Multi';

const App = function () {
  return (
    <View style={style.App}>
      <Mega qtdNum={7} />
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
