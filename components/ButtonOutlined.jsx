import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

const ButtonOutlined = ({label, onPress, style}) => {
  const theme = useThemeColors();

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          ...style,
          backgroundColor: theme['button']['outlined'].bgcolor,
          borderColor: theme['button']['outlined'].border,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[styles.btnText, {color: theme['button']['outlined'].color}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 44,
    backgroundColor: 'transparent',
    borderColor: '#00664F',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#00664F',
    fontFamily: 'SukhumvitSet-SemiBold',
  },
});

export default ButtonOutlined;
