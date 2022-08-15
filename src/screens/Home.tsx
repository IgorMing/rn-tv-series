import { Layout } from '@ui-kitten/components';
import React from 'react';
import { FlatList } from 'react-native';
import ShowCard from '../components/ShowCard';
import { useShows } from '../features/show/hook';

const Home: React.FC = () => {
  const { data } = useShows();

  return (
    <Layout>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ShowCard item={item} />}
      />
    </Layout>
  );
};

export default Home;
