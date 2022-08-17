import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Layout,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import EmptyLayout from '../components/EmptyLayout';
import ShowCard from '../components/ShowCard';
import { useShowList } from '../features/show/useShowList';
import { getSearchbarOptions, SCREEN_DIMENSIONS } from '../helpers';
import { StackParamList } from '../routes';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  const { filteredData, setSearch } = useShowList();

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        ...getSearchbarOptions(theme),
        onChangeText: event => setSearch(event.nativeEvent.text),
      },
    });
  }, [navigation, setSearch, theme]);

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
    height: SCREEN_DIMENSIONS.height,
    justifyContent: 'center',
  },
});

export default HomeScreen;
