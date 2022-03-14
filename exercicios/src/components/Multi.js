import React from 'react';
import Estilo from './estilo';
import {Text} from 'react-native';

function Comp1() {
  return <Text style={Estilo.grande}>Comp #01</Text>;
}
export function Comp2() {
  return <Text style={Estilo.grande}>Comp #02</Text>;
}
export function Comp3() {
  return <Text style={Estilo.grande}>Comp #03</Text>;
}
