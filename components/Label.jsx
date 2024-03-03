import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

const Label = ({label, size, style}) => {
  const theme = useThemeColors();

  const textStyle = () => {
    if (size === 'head') {
      return styles.textHead;
    }
    if (size === 'desc') {
      return styles.textDesc;
    }
    if (size === 'body') {
      return styles.textBody;
    }
    if (size === 'small') {
      return styles.textSmall;
    }

    if (size === 'highlight') {
      return styles.textHighlight;
    }
  };

  return (
    <Text style={[textStyle(), {color: theme['text'][size], ...style}]}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  textHighlight: {
    fontSize: 20,
    fontFamily: 'SukhumvitSet-Bold',
  },
  textHead: {
    fontSize: 20,
    fontFamily: 'SukhumvitSet-Bold',
  },
  textDesc: {
    fontSize: 15,
    fontFamily: 'SukhumvitSet-SemiBold',
  },
  textBody: {
    fontSize: 13,
    fontFamily: 'SukhumvitSet-SemiBold',
  },
  textSmall: {
    fontSize: 11,
    fontFamily: 'SukhumvitSet-Text',
  },
});

export default Label;
