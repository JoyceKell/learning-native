import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View
      style={{
        height: 50,
        width: 50,
        backgroundColor: props.color || '#000',
      }}></View>
  );
};
