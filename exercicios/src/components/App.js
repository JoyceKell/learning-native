import React from 'react';
import {Text, View} from 'react-native';
import Primeiro from '../components/Primeiro';
import {Comp2, Comp3} from '../components/Multi';

const App = function () {
  return (
    <>
      <View>
        <Comp2 />
        <Comp3 />
        <Primeiro />
      </View>
    </>
  );
};

export default App;
