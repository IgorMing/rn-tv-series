import {
  Layout,
  Spinner,
  StyleService,
  Text,
  ThemeType,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import React from 'react';

const EmptyLayout: React.FC<{ loading?: boolean }> = ({ loading }) => {
  const theme = useTheme();
  const styles = useStyleSheet(getThemedStyles(theme));
  return (
    <Layout style={styles.container}>
      {loading ? (
        <Spinner />
      ) : (
        <Text style={styles.text}>No shows were found, sorry.</Text>
      )}
    </Layout>
  );
};

const getThemedStyles = (theme: ThemeType) =>
  StyleService.create({
    container: {
      flex: 1,
      backgroundColor: theme['background-basic-color-1'],
    },
    text: {
      paddingTop: 52,
      textAlign: 'center',
    },
  });

export default EmptyLayout;
