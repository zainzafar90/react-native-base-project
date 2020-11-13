import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '@screens/App/Home';
import AppRoute from './routes';

// App
const AppDrawer = createDrawerNavigator();
const AppStackScreen: FC = () => (
  <AppDrawer.Navigator initialRouteName={AppRoute.Home}>
    <AppDrawer.Screen name={AppRoute.Home} component={HomeScreen} />
  </AppDrawer.Navigator>
);

// Root
const RootStack = createStackNavigator();
const RootStackScreen: FC = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name={AppRoute.AppStack} component={AppStackScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
