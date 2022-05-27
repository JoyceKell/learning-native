import React from 'react';
import {View, Text} from 'react-native';

export default props => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: props.corFundo || '#000',
    }}>
    <Text style={{fontSize: 50, color: props.corTexto || '#fff'}}>
      {props.children}
    </Text>
  </View>
);
