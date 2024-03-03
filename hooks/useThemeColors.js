// hooks/useThemeColors.ts
import {useColorScheme} from 'react-native';
import {themeSchema} from '../constants/themeSchema';

const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const colors = themeSchema[colorScheme];

  return colors;
};

export default useThemeColors;
