import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import params from '../params';
import Mine from './Mine';

export default props => {
  const {mined, opened, nearMines, exploded} = props;
  const stylefield = [styles.field];
  if (opened) stylefield.push(styles.opened);
  if (exploded) stylefield.push(styles.exploded);
  if (stylefield.length === 1) stylefield.push(styles.regular);
  let color = null;
  if (nearMines > 0) {
    if (nearMines == 1) color = '#2A28D7';
    if (nearMines == 2) color = '#2B520F';
    if (nearMines > 2 && nearMines < 6) color = '#F9060A';
    if (nearMines >= 6) color = '#F221A9';
  }

  return (
    <View style={stylefield}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
      ) : (
        false
      )}
      {mined && opened ? <Mine /> : false}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeft: '#CCC',
    borderTop: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});