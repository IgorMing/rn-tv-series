import { ThemeType } from '@ui-kitten/components';
import { SearchBarProps } from 'react-native-screens';

export function getSearchbarOptions(theme: ThemeType): SearchBarProps {
  return {
    autoCapitalize: 'sentences',
    disableBackButtonOverride: false,
    headerIconColor: theme['text-disabled-color'],
    hintTextColor: theme['text-disabled-color'],
    inputType: 'text',
    placeholder: 'Search for a TV show',
    shouldShowHintSearchIcon: false,
    textColor: theme['text-basic-color'],
  };
}
