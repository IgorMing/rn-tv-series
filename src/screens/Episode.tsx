import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components';
import React from 'react';
import { Image, ImageStyle, ScrollView } from 'react-native';
import InfoRow from '../components/InfoRow';
import { SCREEN_DIMENSIONS } from '../helpers';
import { StackParamList } from '../routes';

type EpisodeScreenProps = NativeStackScreenProps<StackParamList, 'Episode'>;

const EpisodeScreen: React.FC<EpisodeScreenProps> = ({ route }) => {
  const styles = useStyleSheet(themedStyles);
  const { episode } = route.params;

  return (
    <Layout style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          resizeMode="contain"
          source={{ uri: episode.image.medium ?? episode.image.original }}
          style={styles.image as ImageStyle}
        />
        <InfoRow label="Name" value={episode.name} />
        <InfoRow label="Episode number" value={episode.number.toString()} />
        <InfoRow label="Episode season" value={episode.season.toString()} />
        <InfoRow label="Summary" value={episode.summary} removeTags />
      </ScrollView>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    height: 200,
    width: SCREEN_DIMENSIONS.width * 0.8,
    alignSelf: 'center',
  },
});

export default EpisodeScreen;
