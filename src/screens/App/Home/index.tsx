import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';

import { HomeScreenProps } from './types';

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
  </View>
);

export default HomeScreen;
