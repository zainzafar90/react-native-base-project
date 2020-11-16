/* eslint-disable react/jsx-props-no-spreading */
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import React, { FC } from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ApplicationProvider } from '@ui-kitten/components';

import store, { persistor } from '@store/index';
import customThemeOverrides from '@styles/themes/custom-theme';

import RootStackScreen from './navigation';

enableScreens();

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...customThemeOverrides }}>
          <NavigationContainer>
            <RootStackScreen />
          </NavigationContainer>
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
