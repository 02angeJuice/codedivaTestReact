/* eslint-disable prettier/prettier */
import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useBoundStore} from '../store';
import AppLayout from '../layouts/AppLayout';
import ButtonContain from '../components/ButtonContain';
import useThemeColors from '../hooks/useThemeColors';
import Label from '../components/Label';

const SelectLanguage = ({navigation}) => {
  const store = useBoundStore();
  const {t, i18n} = useTranslation();
  const theme = useThemeColors();

  useMemo(async () => {
    await i18n.changeLanguage(store.lang);
  }, [store.lang, i18n]);

  const handleLang = async langPress => {
    await store.langSet(langPress);

    navigation.navigate('Disclaimer');
  };

  return (
    <AppLayout>
      {/* <View style={[styles.layout, {justifyContent: 'center'}]}> */}
      <View style={[styles.column, {gap: 100}]}>
        <View>
          <Label size="head" label={t('lang_head')} />
          <Label size="desc" label={t('lang_body')} />
        </View>

        <View style={[{gap: 20}]}>
          <ButtonContain
            label={t('lang_btn_en')}
            onPress={() => handleLang('en')}
          />

          <ButtonContain
            label={t('lang_btn_th')}
            onPress={() => handleLang('th')}
          />
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
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

export default SelectLanguage;
