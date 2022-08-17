import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import { useTheme } from '@ui-kitten/components';
import { getSearchbarOptions } from './helpers';
import EpisodeScreen from './screens/Episode';
import { Episode } from './features/episode/model';

export type StackParamList = {
  Home: undefined;
  Details: { id: number };
  Episode: { episode: Episode };
};

const Stack = createNativeStackNavigator<StackParamList>();

const Routes: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme['background-basic-color-1'],
        },
        headerTintColor: theme['text-basic-color'],
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'TV Series Browser',
          headerSearchBarOptions: { ...getSearchbarOptions(theme) },
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Episode" component={EpisodeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
