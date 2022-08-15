import { Layout, ListItem, Text } from '@ui-kitten/components';
import React from 'react';
import { FlatList } from 'react-native';
import { useShows } from '../features/show/hook';

const Home: React.FC = () => {
  const { data } = useShows();

  return (
    <Layout>
      <Text>This is the home screen</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem title={item.name} />}
      />
    </Layout>
  );
};

export default Home;
