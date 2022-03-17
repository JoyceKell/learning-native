import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V1} />
      <View style={style.V2} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV4: {
    width: 100,
    flexGrow: 1,
    backgroundColor: '#000',
  },
  V1: {
    backgroundColor: '#f09',
    flex: 9,
  },
  V2: {
    backgroundColor: '#ff0',
    flex: 1,
  },
});
