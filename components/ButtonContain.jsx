import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

const ButtonContain = ({label, onPress, style}) => {
  const theme = useThemeColors();

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {...style, backgroundColor: theme['button']['contain'].bgcolor},
      ]}
      onPress={onPress}>
      <Text style={[styles.btnText, {color: theme['button']['contain'].color}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 44,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'SukhumvitSet-SemiBold',
  },
});

export default ButtonContain;
