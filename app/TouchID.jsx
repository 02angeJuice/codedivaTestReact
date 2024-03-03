/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import {StyleSheet, View, Dimensions, Pressable} from 'react-native';

const {width, height} = Dimensions.get('window');

import {useTranslation} from 'react-i18next';
import AppLayout from '../layouts/AppLayout';
import ButtonContain from '../components/ButtonContain';
import Label from '../components/Label';
import {TouchIDSVG} from '../assets/svg';

const TouchID = ({navigation}) => {
  const {t} = useTranslation();

  const handleTouchId = data => {
    // navigation.navigate('TouchIDLogin', {isSkipped: data?.skip || false});
    navigation.reset({
      index: 1,
      routes: [
        {name: 'TouchIDLogin', params: {isSkipped: data?.skip || false}},
      ],
    });
  };

  return (
    <AppLayout>
      {/* <View style={[styles.layout]}> */}
      <View style={[styles.column, {flex: 1, justifyContent: 'space-between'}]}>
        <View style={[styles.column, {gap: 10}]}>
          <Label size="head" label={t('touchid_title_head')} />
          <Label
            size="desc"
            label={t('touchid_desc_head')}
            style={{maxWidth: 194}}
          />
        </View>

        <View style={{width: 90, height: 90, alignSelf: 'center'}}>
          <View style={[styles.touchidStyle, styles.shadow]}>
            <TouchIDSVG width={70} height={70} />
          </View>
        </View>

        <View
          style={[
            styles.column,
            {gap: 35, alignItems: 'center', paddingBottom: height / 10},
          ]}>
          <ButtonContain label={t('touchid_submit')} onPress={handleTouchId} />
          <Pressable
            style={styles.pressText}
            onPress={() => {
              handleTouchId({skip: true});
            }}>
            <Label
              size="highlight"
              label={t('touchid_skip')}
              style={{fontSize: 14}}
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
  touchidStyle: {backgroundColor: 'white', borderRadius: 50, padding: 10},
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default TouchID;
