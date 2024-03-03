/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useRef, useCallback} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  // ScrollView,
  Dimensions,
} from 'react-native';
import {useTranslation} from 'react-i18next';

const {height} = Dimensions.get('window');

import BottomSheetLayout from '../components/BottomSheetLayout';

import {ScrollView} from 'react-native-gesture-handler';
import ButtonContain from '../components/ButtonContain';
import ButtonOutlined from '../components/ButtonOutlined';
import useThemeColors from '../hooks/useThemeColors';
import {TermSVG} from '../assets/svg';

const Disclaimer = ({navigation, open, setOpen}) => {
  const {t} = useTranslation();
  const theme = useThemeColors();

  const handleTerm = ans => {
    ans === 'decline'
      ? navigation.goBack()
      : // : navigation.navigate('Login');
        navigation.reset({
          index: 1,
          routes: [{name: 'Login'}],
        });
  };

  return (
    <BottomSheetLayout>
      <View
        style={[{alignSelf: 'flex-start', width: '100%'}, styles.headStyle]}>
        <View
          style={[
            styles.row,
            {
              gap: 10,
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingBottom: 20,
            },
          ]}>
          <View style={{width: 24, height: 24}}>
            <TermSVG width={24} height={24} />
          </View>

          <Text style={[styles.textHead, {color: theme['text'].head}]}>
            {t('term_head')}
          </Text>
        </View>
      </View>

      <View style={[styles.column, {maxHeight: 500}]}>
        <ScrollView style={{height: '100%'}}>
          <Text style={{color: theme['text'].body}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui illum
            mollitia quasi, fugit illo, dolore tempora excepturi molestias
            repellat nisi alias veniam harum velit! Reiciendis quam atque ipsum
            est maiores?
          </Text>
          <Text style={{color: theme['text'].body}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui illum
            mollitia quasi, fugit illo, dolore tempora excepturi molestias
            repellat nisi alias veniam harum velit! Reiciendis quam atque ipsum
            est maiores?
          </Text>
          <Text style={{color: theme['text'].body}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui illum
            mollitia quasi, fugit illo, dolore tempora excepturi molestias
            repellat nisi alias veniam harum velit! Reiciendis quam atque ipsum
            est maiores?
          </Text>
          <Text style={{color: theme['text'].body}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui illum
            mollitia quasi, fugit illo, dolore tempora excepturi molestias
            repellat nisi alias veniam harum velit! Reiciendis quam atque ipsum
            est maiores?
          </Text>
        </ScrollView>
      </View>

      <View style={[styles.row, {gap: 10, paddingBottom: height / 20}]}>
        <ButtonOutlined
          label={t('term_btn_decline')}
          onPress={() => handleTerm('decline')}
          style={{flex: 0.5}}
        />

        <ButtonContain
          label={t('term_btn_accept')}
          onPress={() => handleTerm('accept')}
          style={{flex: 0.5}}
        />
      </View>
    </BottomSheetLayout>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textHead: {
    fontSize: 20,
    fontFamily: 'SukhumvitSet-SemiBold',
  },
  headStyle: {
    borderBottomWidth: 1.2,
    borderColor: '#E4E4E4',
  },

  modalView: {
    backgroundColor: 'white',

    paddingVertical: 10,
    paddingHorizontal: 35,
  },
});

export default Disclaimer;
