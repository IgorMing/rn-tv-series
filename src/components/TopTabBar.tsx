import {
  StyleService,
  Tab,
  TabBar,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';

interface TopTabBarProps {
  selected: number;
  setSelected(selected: number): void;
}

const TopTabBar: React.FC<TopTabBarProps> = ({ selected, setSelected }) => {
  const styles = useStyleSheet(themedStyles);

  function renderTab(label: string) {
    return (
      <Tab
        title={eva => (
          <Text {...eva} category="p1" style={styles.text}>
            {label}
          </Text>
        )}
      />
    );
  }

  return (
    <TabBar
      selectedIndex={selected}
      onSelect={setSelected}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}>
      {renderTab('Info')}
      {renderTab('Episodes')}
    </TabBar>
  );
};

const themedStyles = StyleService.create({
  tabBar: {
    backgroundColor: 'background-basic-color-1',
  },
  indicator: {
    backgroundColor: 'color-basic-transparent-focus-border',
  },
  text: {
    padding: 8,
  },
});

export default TopTabBar;
