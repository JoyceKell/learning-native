import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import TelaA from './components/views/TelaA';
import TelaB from './components/views/TelaB';
import TelaC from './components/views/TelaC';

export default props => (
  <SafeAreaView style={{flex: 1}}>
    <TelaA />
    <TelaB />
    <TelaC />
  </SafeAreaView>
);
