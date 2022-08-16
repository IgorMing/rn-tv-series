import { SearchBarProps } from 'react-native-screens';

export function getSearchbarOptions(
  theme: Record<string, string>,
): SearchBarProps {
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
