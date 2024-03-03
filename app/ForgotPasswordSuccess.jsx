/* eslint-disable prettier/prettier */
import React from 'react';

import {StyleSheet, View, useColorScheme} from 'react-native';

import {useTranslation} from 'react-i18next';
import AppLayout from '../layouts/AppLayout';
import {SuccessIconLightSVG, SuccessIconDarkSVG} from '../assets/svg';
import ButtonContain from '../components/ButtonContain';
import Label from '../components/Label';

const ForgotPasswordSuccess = ({navigation}) => {
  const {t} = useTranslation();
  const colorScheme = useColorScheme();

  const handleOk = () => {
    navigation.reset({
      index: 1,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <AppLayout>
      {/* <View style={[styles.layout, {justifyContent: 'flex-start'}]}> */}
      <View
        style={[
          styles.column,
          {flex: 1, justifyContent: 'flex-start', paddingTop: 40},
        ]}>
        <View style={{alignItems: 'center', paddingVertical: 50}}>
          {colorScheme === 'dark' ? (
            <SuccessIconDarkSVG width={128} height={128} />
          ) : (
            <SuccessIconLightSVG width={128} height={128} />
          )}
        </View>

        <View style={[styles.column, {gap: 50}]}>
          <View style={{alignItems: 'center', gap: 10}}>
            <Label size="head" label={t('forgot_success_title')} />
            <Label size="body" label={t('forgot_success_desc')} />
          </View>

          <ButtonContain
            label={t('forgot_success_submit')}
            onPress={handleOk}
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

export default ForgotPasswordSuccess;
