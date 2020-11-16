import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { HomeScreenProps } from './types';

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
