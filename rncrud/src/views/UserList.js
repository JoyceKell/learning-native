import React, {useContext} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default props => {
  const {state} = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert('Excluir usuário?', 'Deseja excluir o usuário?', [
      {
        text: 'sim',
        onPress() {
          console.warn('delete');
        },
      },
      {
        text: 'não',
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        leftAvatar={{source: {uri: user.avatarUrl}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm', user)}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={state.users}
        keyExtractor={user => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};
