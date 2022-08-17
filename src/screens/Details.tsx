import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Layout,
  Spinner,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Image, ImageStyle, ScrollView, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import EpisodeList from '../components/EpisodeList';
import InfoRow from '../components/InfoRow';
import TopTabBar from '../components/TopTabBar';
import { useShowDetails } from '../features/show/useShowDetails';
import { removeHTMLTags, SCREEN_DIMENSIONS } from '../helpers';
import { StackParamList } from '../routes';

type DetailsProps = NativeStackScreenProps<StackParamList, 'Details'>;

const DetailsScreen: React.FC<DetailsProps> = ({ route }) => {
  const { id } = route.params;
  const styles = useStyleSheet(themedStyles);
  const { data, loading, episodes } = useShowDetails(id);
  const [selectedTab, setTab] = useState(0);

  if (loading || !data) {
    return (
      <Layout style={styles.containerWithPadding}>
        <Spinner status="basic" />
      </Layout>
    );
  }

  const renderByTab = () => {
    switch (selectedTab) {
      case 0:
        return (
          <ScrollView contentContainerStyle={styles.scroll} nestedScrollEnabled>
            <Image
              resizeMode="cover"
              source={{ uri: data?.image.medium ?? data?.image.original }}
              style={styles.image as ImageStyle}
            />
            <View style={styles.contentContainer}>
              <InfoRow label="Name" value={data.name} />
              <InfoRow
                label="Year"
                value={dayjs(data.premiered).format('YYYY')}
              />
              <InfoRow label="Summary" value={removeHTMLTags(data.summary)} />
              <InfoRow label="Schedule">
                <Text category="p1">
                  Every {data.schedule.days.join(', ')} at {data.schedule.time}
                </Text>
              </InfoRow>
              <InfoRow label="Genres" value={data.genres.join(', ')} />
            </View>
          </ScrollView>
        );
      case 1:
        return <EpisodeList episodes={episodes} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopTabBar selected={selectedTab} setSelected={setTab} />
      {renderByTab()}
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  containerWithPadding: {
    height: SCREEN_DIMENSIONS.height,
    paddingTop: 52,
    alignItems: 'center',
  },
  container: {
    width: SCREEN_DIMENSIONS.width,
    minHeight: SCREEN_DIMENSIONS.height,
    backgroundColor: 'background-basic-color-1',
  },
  scroll: {
    alignItems: 'center',
  },
  contentContainer: {
    paddingTop: 22,
    paddingHorizontal: 20,
    width: SCREEN_DIMENSIONS.width,
  },
  image: {
    height: 400,
    width: SCREEN_DIMENSIONS.width * 0.6,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
