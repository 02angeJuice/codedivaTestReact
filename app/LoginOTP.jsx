/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useTranslation} from 'react-i18next';
import AppLayout from '../layouts/AppLayout';
import ButtonContain from '../components/ButtonContain';
import Label from '../components/Label';
import useThemeColors from '../hooks/useThemeColors';
import {LockSVG} from '../assets/svg';

const LoginOTP = ({navigation}) => {
  const {t} = useTranslation();
  const theme = useThemeColors();

  const handleRequestOTP = () => {
    navigation.navigate('LoginVerify');
  };

  return (
    <AppLayout>
      {/* <View style={[styles.layout, {justifyContent: 'center'}]}> */}
      <View style={[styles.column, {gap: 100}]}>
        <View style={[{gap: 60}]}>
          <View style={[styles.column, {alignItems: 'center', gap: 20}]}>
            <LockSVG width={80} height={80} fill={theme['svg']} />

            <View style={{alignItems: 'center', gap: 20}}>
              <Label size="head" label={t('otp_title')} />
              <Label size="highlight" label="082-XXX-8998" />
            </View>
          </View>

          <View style={[styles.column, {gap: 25}]}>
            <ButtonContain label={t('otp_submit')} onPress={handleRequestOTP} />

            <Label
              size="small"
              label={`${t('otp_issue')} 02-XXX-XXXX`}
              style={{alignSelf: 'center'}}
            />
          </View>
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
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LoginOTP;
