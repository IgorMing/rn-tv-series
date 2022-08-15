import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar barStyle={'light-content'} />
      <Home />
    </ApplicationProvider>
  );
};

export default App;
