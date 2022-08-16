import { Card, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import dayjs from 'dayjs';
import React from 'react';
import { Image, ImageStyle } from 'react-native';
import { Show } from '../features/show/model';

interface ShowCardProps {
  item: Show;
  onPress(id: number): void;
}

const ShowCard: React.FC<ShowCardProps> = ({ item, onPress }) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Card style={styles.full} onPress={() => onPress(item.id)}>
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

export default ShowCard;