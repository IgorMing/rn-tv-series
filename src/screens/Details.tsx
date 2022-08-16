import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StackParamList } from '../routes';

type DetailsProps = NativeStackScreenProps<StackParamList, 'Details'>;

const DetailsScreen: React.FC<DetailsProps> = ({ route }) => {
  const { id } = route.params;

  return (
    <Layout>
      <Text>This is details screen. ID: {id}</Text>
    </Layout>
  );
};

export default DetailsScreen;
