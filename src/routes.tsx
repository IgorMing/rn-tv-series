import { useTheme } from '@ui-kitten/components';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Episode } from './features/episode/model';
import { getSearchbarOptions } from './helpers';
import DetailsScreen from './screens/Details';
import EpisodeScreen from './screens/Episode';
import HomeScreen from './screens/Home';

export type StackParamList = {
  Home: undefined;
  Details: { id: number };
  Episode: { episode: Episode };
};

const Stack = createSharedElementStackNavigator<StackParamList>();

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
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        sharedElements={route => {
          const { id } = route.params;
          return [`item.${id}.image`];
        }}
      />
      <Stack.Screen name="Episode" component={EpisodeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
