/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import {useIsFocused} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import PINCodeInput from '../components/PINCodeInput';
import AppLayout from '../layouts/AppLayout';

const pinLength = 4;

const PincodeSet = ({navigation}) => {
  const {t} = useTranslation();

  const [code, setCode] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setCode([]);
    }
  }, [isFocused]);

  useEffect(() => {
    if (code?.length === pinLength) {
      console.log(code);
      navigation.navigate('PincodeConfirm', {code: code});
    }
  }, [code, navigation]);

  return (
    <AppLayout>
      {/* <View style={[styles.layout]}> */}
      <PINCodeInput title={t('pin_title_set')} code={code} setCode={setCode} />
      {/* </View> */}
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 20,
    paddingTop: height / 5,
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

export default PincodeSet;
