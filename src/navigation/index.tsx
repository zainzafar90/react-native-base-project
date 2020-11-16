import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@screens/App/Home';
import LoginScreen from '@screens/Auth/Login';
import AppRoute from './routes';

// Auth
// const AuthStack = createStackNavigator();
// const AuthStackScreen: FC = () => (
//   <AuthStack.Navigator initialRouteName={AppRoute.Login}>
//     <AuthStack.Screen name={AppRoute.Login} component={LoginScreen} />
//   </AuthStack.Navigator>
// );

// App
const AppStack = createStackNavigator();
const AppStackScreen: FC = () => (
  <AppStack.Navigator initialRouteName={AppRoute.Home}>
    <AppStack.Screen
      name={AppRoute.Home}
      component={HomeScreen}
      options={{
        title: 'Der Nordschleswiger',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Georgia-BoldItalic',
          letterSpacing: -0.5,
          fontSize: 22,
        },
      }}
    />
    <AppStack.Screen name={AppRoute.Login} component={LoginScreen} />
  </AppStack.Navigator>
);

// Root
const RootStack = createStackNavigator();
const RootStackScreen: FC = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name={AppRoute.AppStack} component={AppStackScreen} />
    {/* <RootStack.Screen name={AppRoute.AuthStack} component={AuthStackScreen} /> */}
  </RootStack.Navigator>
);

export default RootStackScreen;
