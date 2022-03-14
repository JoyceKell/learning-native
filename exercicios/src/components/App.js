import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Botao from '../components/Botao';
//import Frag from '../components/Frag';
//import Minmax from '../components/Minmax';
//import Aleatorio from '../components/Aleatorio';
//import Primeiro from '../components/Primeiro';
//import {Comp2, Comp3} from '../components/Multi';

const App = function () {
  return (
    <View style={style.App}>
      <Botao />
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
