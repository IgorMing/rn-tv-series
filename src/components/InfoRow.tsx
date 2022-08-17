import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

interface InfoRowProps {
  label: string;
  value?: string;
}

const InfoRow: React.FC<PropsWithChildren<InfoRowProps>> = ({
  children,
  label,
  value,
}) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.container}>
      <Text category="label">
        {label}: <Text category="p1">{value}</Text>
      </Text>
      {children}
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'white',
    paddingVertical: 12,
  },
});

export default InfoRow;
