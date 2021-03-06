import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import * as loginActions from '../../actions/loginActions';

export default function Login() {
  const id = useSelector((state) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.login}>Login Status : {id}</Text>
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Login
        </Button>
      </View>
    </View>
  );
}
