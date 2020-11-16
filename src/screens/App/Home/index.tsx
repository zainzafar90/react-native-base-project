import React, { FC, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store/types';
import { login } from '@store/auth';
import { HomeScreenProps } from './types';

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    console.log(isAuthenticated, error);
    dispatch(login('zainzafar90@gmail.com', '123456'));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default HomeScreen;
