/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Pressable} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import {useTranslation} from 'react-i18next';
import AppLayout from '../layouts/AppLayout';
import ButtonContain from '../components/ButtonContain';
import ButtonOutlined from '../components/ButtonOutlined';
import Label from '../components/Label';
import useThemeColors from '../hooks/useThemeColors';

const Login = ({navigation}) => {
  const {t} = useTranslation();
  const theme = useThemeColors();

  const [isSelected, setSelection] = useState(false);

  const handleForgot = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLogin = () => {
    navigation.navigate('LoginOTP');
  };

  return (
    <AppLayout>
      {/* <View style={[styles.layout, {justifyContent: 'center'}]}> */}
      <View style={[styles.column, {gap: 100}]}>
        <View style={[{gap: 35}]}>
          <TextInput
            style={styles.input}
            placeholderTextColor={theme['text'].primary}
            placeholder={t('login_username')}
          />

          <TextInput
            style={[styles.input]}
            placeholderTextColor={theme['text'].primary}
            placeholder={t('login_password')}
            secureTextEntry
          />

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                tintColors={{false: theme['gray']}}
                value={isSelected}
                onValueChange={setSelection}
              />

              <Label size="body" label={t('login_memo')} />
            </View>

            <Pressable style={styles.pressText} onPress={handleForgot}>
              <Label size="body" label={t('login_forgot')} />
            </Pressable>
          </View>
          <View style={[styles.column, {gap: 35}]}>
            <ButtonContain label={t('login_submit')} onPress={handleLogin} />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1, height: 1, backgroundColor: '#ccc'}} />
              <View>
                <Label
                  size="body"
                  label={t('login_divider')}
                  style={{width: 100, textAlign: 'center'}}
                />
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: '#ccc'}} />
            </View>

            <ButtonOutlined label={t('login_regis')} />
          </View>
        </View>
      </View>
      {/* </View> */}
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  pressText: {
    paddingLeft: 10,
    paddingVertical: 10,
  },
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
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Login;
