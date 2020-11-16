import React, { FC } from 'react';
import { Layout, Button } from '@ui-kitten/components';

import AppRoute from 'navigation/routes';
import { HomeScreenProps } from './types';

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => navigation.navigate(AppRoute.Login)}>LOGIN</Button>
    </Layout>
  );
};

export default HomeScreen;
