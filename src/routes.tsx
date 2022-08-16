import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

export type StackParamList = {
  Home: undefined;
  Details: { id: number };
};

const Stack = createNativeStackNavigator<StackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
