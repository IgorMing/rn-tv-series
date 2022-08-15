import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <Text>Testing...</Text>
    </SafeAreaView>
  );
};

export default App;
