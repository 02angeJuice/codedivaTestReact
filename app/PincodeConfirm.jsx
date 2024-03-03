/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';

import {StyleSheet, Alert, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import _isEqual from 'lodash/isEqual';

import {useTranslation} from 'react-i18next';
import PINCodeInput from '../components/PINCodeInput';
import {useBoundStore} from '../store';
import AppLayout from '../layouts/AppLayout';

const pinLength = 4;

const PincodeConfirm = ({navigation, route}) => {
  const {t} = useTranslation();
  const store = useBoundStore();

  const {code: before} = route.params;
  const [code, setCode] = useState([]);

  useEffect(() => {
    if (code?.length === pinLength) {
      if (_isEqual(before, code)) {
        console.log('ok');

        store.pinSet(code);

        navigation.reset({
          index: 1,
          routes: [{name: 'TouchID'}],
        });
      } else {
        Alert.alert('Error', t('pin_issue'));
        setCode([]);
      }
    }
  }, [code, before, navigation]);

  return (
    <AppLayout>
      {/* <View style={[styles.layout]}> */}
      <PINCodeInput
        title={t('pin_title_confirm')}
        code={code}
        setCode={setCode}
      />
      {/* </View> */}
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  layout: {
    flex: 1,
    padding: 20,
    paddingTop: height / 5,
  },

  column: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  btnOutlined: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'transparent',
    // borderStyle: 'solid',
    borderColor: '#00664F',
    // borderStartWidth: 1,
    borderWidth: 1,
    borderRadius: 5,
  },
  btnTextOutlined: {
    fontSize: 20,
    textAlign: 'center',
    color: '#00664F',
    fontFamily: 'Sukhumvit Set',
  },
  btn: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#00664F',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Sukhumvit Set',
  },

  textHead: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Sukhumvit Set',
  },
  textBody: {
    fontSize: 15,
    fontFamily: 'Sukhumvit Set',
  },
});

export default PincodeConfirm;
