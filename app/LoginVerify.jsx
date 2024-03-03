/* eslint-disable react-native/no-inline-styles */
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
  Pressable,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import {useTranslation} from 'react-i18next';
import ConfirmationCodeField from '../components/ConfirmationCodeField';
import AppLayout from '../layouts/AppLayout';
import Label from '../components/Label';
import useThemeColors from '../hooks/useThemeColors';

const valueLength = 6;

const LoginVerify = ({navigation}) => {
  const {t} = useTranslation();
  const theme = useThemeColors();

  const [isSelected, setSelection] = useState(false);

  const [seconds, setSeconds] = useState(60);

  const [value, setValue] = useState('');

  useEffect(() => {
    if (value?.length === valueLength) {
      navigation.reset({
        index: 0,
        routes: [{name: 'PincodeSet'}],
      });
    }
  }, [value, navigation]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 1) {
          clearInterval(timer);
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  return (
    <AppLayout>
      {/* <View style={[styles.layout]}> */}
      <View
        style={[
          styles.column,
          {gap: 20, flex: 1, justifyContent: 'space-between'},
        ]}>
        <View style={[styles.column, {gap: 10}]}>
          <View style={[styles.column, {gap: 10}]}>
            <Label size="head" label={t('verify_title')} />
            <Label size="desc" label={t('verify_desc')} />
            <Label size="desc" label="082-XXX-8998" />
          </View>
          <ConfirmationCodeField value={value} setValue={setValue} />
        </View>

        <View
          style={[
            styles.column,
            {
              gap: 10,
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: 50,
            },
          ]}>
          <Label size="desc" label={t('verify_issue')} />

          <Pressable
            style={styles.pressText}
            onPress={() => {
              setSeconds(60), setValue('');
            }}>
            <Label
              size="highlight"
              label={`${t('verify_resend')} (${seconds})`}
              style={{fontSize: 15}}
            />
          </Pressable>
        </View>
      </View>
      {/* </View> */}
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  pressText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
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

export default LoginVerify;
