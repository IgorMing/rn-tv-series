import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import _groupby from 'lodash.groupby';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Episode } from '../features/episode/model';
import { SCREEN_DIMENSIONS } from '../helpers';
import { StackParamList } from '../routes';

interface EpisodeListProps {
  episodes: Episode[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const completeSections = _groupby(episodes, (each: Episode) => each.season);
  const sections = Object.keys(completeSections);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Accordion
        activeSections={activeSections}
        sections={sections}
        renderHeader={season => (
          <View style={styles.headerContainer}>
            <Text>Season {season}</Text>
          </View>
        )}
        // @ts-ignore
        renderContent={season => {
          return completeSections[season].map(seasonEpisode => {
            return (
              <Card
                onPress={() => {
                  navigation.navigate('Episode', { episode: seasonEpisode });
                }}>
                <Text>
                  {seasonEpisode.number} - {seasonEpisode.name}
                </Text>
              </Card>
            );
          });
        }}
        onChange={(activeIndex: number[]) => {
          setActiveSections(activeIndex);
        }}
      />
    </ScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    width: SCREEN_DIMENSIONS.width,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 150,
  },
  headerContainer: {
    paddingVertical: 8,
  },
  episodeRow: {
    borderBottomColor: 'text-basic-color',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default EpisodeList;
