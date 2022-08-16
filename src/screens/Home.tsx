import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Layout, useTheme } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useDebounce } from 'use-debounce';
import ShowCard from '../components/ShowCard';
import { useShows } from '../features/show/hook';
import { StackParamList } from '../routes';
import { getSearchbarOptions } from './helpers';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 1000);

  const { data } = useShows();

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        ...getSearchbarOptions(theme),
        onChangeText: event => setSearch(event.nativeEvent.text),
      },
    });
  }, [navigation, theme]);

  console.log(debouncedSearch);

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
