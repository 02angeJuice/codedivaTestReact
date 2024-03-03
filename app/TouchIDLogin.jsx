/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, Alert, Pressable} from 'react-native';
import TouchID from 'react-native-touch-id';

const {width, height} = Dimensions.get('window');

import _isEqual from 'lodash/isEqual';
import {useIsFocused} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import PINCodeInputLogin from '../components/PINCodeInputLogin';
import {useBoundStore} from '../store';
import AppLayout from '../layouts/AppLayout';
import Label from '../components/Label';

const pinLength = 4;

const TouchIDLogin = ({navigation, route}) => {
  const {t} = useTranslation();
  const store = useBoundStore();

  const [code, setCode] = useState([]);
  const isFocused = useIsFocused();

  const {isSkipped} = route.params;

  console.log('store', store?.pin);

  useEffect(() => {
    if (isFocused) {
      setCode([]);
    }
  }, [isFocused]);

  useEffect(() => {
    if (code?.length === pinLength) {
      if (_isEqual(store?.pin, code)) {
        console.log('ok');

        store.pinSet(code);

        navigation.reset({
          index: 1,
          routes: [{name: 'SelectLanguage'}],
        });

        Alert.alert(t('touchid_success'));
      } else {
        Alert.alert(t('pin_issue'), '');
        setCode([]);
      }
    }
  }, [code, navigation]);

  useEffect(() => {
    if (!isSkipped) {
      handleTouchId();
    }
  }, [isSkipped]);

  const handleTouchId = async () => {
    await TouchID.isSupported()
      .then(biometryType => {
        console.log(biometryType);
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
          TouchID.authenticate('Authenticate', {
            title: t('touchid_title'), // Android
            imageColor: '#e00606', // Android
            imageErrorColor: '#ff0000', // Android
            sensorDescription: t('touchid_desc'), // Android
            sensorErrorDescription: t('touchid_fail'), // Android
            cancelText: t('touchid_cancel'), // Android
            fallbackLabel: t('touchid_show_passcode'), // iOS (if empty, then label is hidden)
            unifiedErrors: false, // use unified error messages (default false)
            passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
          })
            .then(success => {
              console.log(success);
              if (success) {
                setCode(store?.pin);
              }
            })
            .catch(error => console.log(error));
        }
      })
      .catch(error => {
        // Failure code
        Alert.alert(t('touchid_notfound'));
      });
  };

  const handleForgotPIN = () => {
    navigation.reset({
      index: 1,
      routes: [{name: 'PincodeSet'}],
    });
  };

  return (
    <AppLayout>
      <View
        style={[
          styles.column,
          {gap: 30, justifyContent: 'space-between', alignItems: 'center'},
        ]}>
        <PINCodeInputLogin
          title={t('pin_title_required')}
          code={code}
          setCode={setCode}
          onPressTouchId={handleTouchId}
        />

        <Pressable
          style={styles.pressText}
          onPress={() => {
            handleForgotPIN({skip: true});
          }}>
          <Label size="desc" label={t('pin_fotgot')} />
        </Pressable>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  pressText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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

export default TouchIDLogin;
