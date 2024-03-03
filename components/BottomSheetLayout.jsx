/* eslint-disable prettier/prettier */
import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import useThemeColors from '../hooks/useThemeColors';

const BottomSheetLayout = ({children}) => {
  const theme = useThemeColors();
  // ref
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '80%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    // console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        index={2}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}>
        <View
          style={[
            styles.contentContainer,
            {backgroundColor: theme['termcolor']},
          ]}>
          {children}
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'gray',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
});

export default BottomSheetLayout;
