import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Primeiro from '../components/Primeiro';
import {Comp2, Comp3} from '../components/Multi';

const App = function () {
  return (
    <View style={style.App}>
      <Comp2 />
      <Comp3 />
      <Primeiro />
    </View>
  );
};

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
