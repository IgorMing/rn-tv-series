import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { Dimensions, FlatList, SafeAreaView } from 'react-native';
import EmptyLayout from '../components/EmptyLayout';
import ShowCard from '../components/ShowCard';
import { useShows } from '../features/show/hook';
import { getSearchbarOptions } from '../helpers';
import { StackParamList } from '../routes';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

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
      <Layout style={styles.container}>
        <FlatList
          data={filteredData}
          numColumns={2}
          ListEmptyComponent={EmptyLayout}
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

const themedStyles = StyleService.create({
  container: {
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
  },
});

export default HomeScreen;
