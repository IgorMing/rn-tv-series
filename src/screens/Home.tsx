import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Layout } from '@ui-kitten/components';
import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import ShowCard from '../components/ShowCard';
import { useShows } from '../features/show/hook';
import { StackParamList } from '../routes';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const { data } = useShows();

  return (
    <SafeAreaView>
      <Layout>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <ShowCard
              item={item}
              onPress={id => navigation.navigate('Details', { id })}
            />
          )}
        />
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
