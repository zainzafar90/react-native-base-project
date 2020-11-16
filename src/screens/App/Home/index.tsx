import React, { FC } from 'react';
import { Layout, Button } from '@ui-kitten/components';

import { HomeScreenProps } from './types';

const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button>HOME</Button>
    </Layout>
  );
};

export default HomeScreen;
