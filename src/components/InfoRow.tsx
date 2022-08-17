import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { removeHTMLTags } from '../helpers';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

interface InfoRowProps {
  label: string;
  value?: string;
  removeTags?: boolean;
}

const InfoRow: React.FC<PropsWithChildren<InfoRowProps>> = ({
  children,
  label,
  removeTags,
  value,
}) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <View style={styles.container}>
      <Text category="label">
        {label}:{' '}
        <Text category="p1">
          {removeTags ? removeHTMLTags(value ?? '') : value}
        </Text>
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
