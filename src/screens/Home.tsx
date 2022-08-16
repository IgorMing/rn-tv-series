import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Layout, useTheme } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import ShowCard from '../components/ShowCard';
import { useShows } from '../features/show/hook';
import { getSearchbarOptions } from '../helpers';
import { StackParamList } from '../routes';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const theme = useTheme();

  const { filteredData, setQuery } = useShows();

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        ...getSearchbarOptions(theme),
        onChangeText: event => setQuery(event.nativeEvent.text),
      },
    });
  }, [navigation, setQuery, theme]);

  return (
    <SafeAreaView>
      <Layout>
        <FlatList
          data={filteredData}
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
