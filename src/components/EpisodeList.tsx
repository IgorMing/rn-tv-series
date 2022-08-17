import {
  List,
  ListItem,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import _groupby from 'lodash.groupby';
import React, { useState } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import { StyleSheet, View } from 'react-native';
import { Episode } from '../features/episode/model';
import { SCREEN_DIMENSIONS } from '../helpers';

interface EpisodeListProps {
  episodes: Episode[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  const styles = useStyleSheet(themedStyles);
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const completeSections = _groupby(episodes, (each: Episode) => each.season);
  const sections = Object.keys(completeSections);

  return (
    <View style={styles.container}>
      <Accordion
        activeSections={activeSections}
        sections={sections}
        renderHeader={season => (
          <View style={styles.headerContainer}>
            <Text>Season {season}</Text>
          </View>
        )}
        renderContent={season => (
          <List
            nestedScrollEnabled
            data={completeSections[season]}
            renderItem={({ item }: { item: Episode }) => (
              <ListItem
                title={`${item.number} - ${item.name}`}
                style={styles.episodeRow}
              />
            )}
          />
        )}
        onChange={(activeIndex: number[]) => {
          setActiveSections(activeIndex);
        }}
      />
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    width: SCREEN_DIMENSIONS.width,
    paddingHorizontal: 22,
    paddingTop: 12,
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
