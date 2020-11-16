import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';

import { AuthScreenProps } from './types';

const LoginScreen: FC<AuthScreenProps> = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Login Screen</Text>
    <Button title="Back" onPress={() => navigation.pop()} />
  </View>
);

export default LoginScreen;
