import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
