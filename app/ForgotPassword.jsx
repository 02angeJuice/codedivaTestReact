/* eslint-disable prettier/prettier */
import React, {useEffect, useMemo, useState, useRef, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import {useTranslation} from 'react-i18next';
import AppLayout from '../layouts/AppLayout';
import ButtonContain from '../components/ButtonContain';
import useThemeColors from '../hooks/useThemeColors';
import Label from '../components/Label';

const ForgotPassword = ({navigation}) => {
  const {t} = useTranslation();
  const theme = useThemeColors();

  const handleSendForgot = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'ForgotPasswordSuccess'}],
    });
  };

  return (
    <AppLayout>
      <View
        style={[
          styles.column,
          {gap: 100, flex: 1, justifyContent: 'flex-start'},
        ]}>
        <View style={[styles.column, {gap: 10}]}>
          <Label size="head" label={t('forgot_title')} />
          <Label size="desc" label={t('forgot_desc')} style={{maxWidth: 224}} />
        </View>

        <View style={[styles.column, {gap: 50}]}>
          <TextInput
            style={styles.input}
            placeholder={t('forgot_input')}
            placeholderTextColor={theme['text'].primary}
          />

          <ButtonContain
            label={t('forgot_submit')}
            onPress={handleSendForgot}
          />
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 13,
    fontFamily: 'SukhumvitSet-SemiBold',
  },

  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ForgotPassword;
