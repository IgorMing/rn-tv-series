import {
  Card,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import dayjs from 'dayjs';
import React from 'react';
import { FlatList, Image, ImageStyle } from 'react-native';
import { useShows } from '../features/show/hook';

const Home: React.FC = () => {
  const { data } = useShows();
  const styles = useStyleSheet(themedStyles);

  return (
    <Layout>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <Card style={styles.full}>
            <Image
              source={{ uri: item.image.medium ?? item.image.original }}
              style={styles.cardImage as ImageStyle}
            />
            <Text style={styles.textStyle} numberOfLines={2}>
              {item.name}{' '}
              <Text style={styles.nestedTextStyle}>
                ({dayjs(item.premiered).format('YYYY')})
              </Text>
            </Text>
          </Card>
        )}
      />
    </Layout>
  );
};

const themedStyles = StyleService.create({
  full: {
    flex: 1,
  },
  cardImage: {
    height: 250,
  },
  textStyle: {
    textAlign: 'center',
    paddingTop: 10,
  },
  nestedTextStyle: {
    fontStyle: 'italic',
  },
});

export default Home;
