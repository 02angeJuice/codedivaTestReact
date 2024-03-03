import React from 'react';
import {Dimensions, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useThemeColors from '../hooks/useThemeColors';

const {height} = Dimensions.get('window');

const AppLayout = ({children}) => {
  const theme = useThemeColors();

  const colorScheme = useColorScheme();

  return (
    <LinearGradient
      angleCenter={{x: 0.5, y: 0.5}}
      colors={
        colorScheme === 'light'
          ? [theme['bgcolor'], '#F2F7FF', '#F2F7FF', theme['bgcolor']]
          : [theme['bgcolor'], '#00664F', '#00664F', theme['bgcolor']]
      }
      style={[styles.layout]}>
      <StatusBar translucent backgroundColor="transparent" />

      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    paddingTop: height / 7.5,
  },
});

export default AppLayout;
