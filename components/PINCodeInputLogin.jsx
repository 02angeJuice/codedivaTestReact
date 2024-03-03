/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  Pressable,
  useColorScheme,
} from 'react-native';
import Label from './Label';
import useThemeColors from '../hooks/useThemeColors';
import {DeleteSVG, TouchIDDarkSVG, TouchIDSVG} from '../assets/svg';

const {width, height} = Dimensions.get('window');

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'];
const pinLength = 4;
const pinContainerSize = width / 2;
const pinSize = pinContainerSize / pinLength;
const pinSizeControl = 3;
const _spacing = 20;

const PinButton = ({el, code, setCode, onPressTouchId}) => {
  const [pressed, setPressed] = useState(false);
  const theme = useThemeColors();
  const colorScheme = useColorScheme();

  const handleNumberPress = id => {
    if (id === 'del') {
      setCode(el => el.slice(0, el.length - 1));
    } else if (typeof id === 'number') {
      if (code?.length === pinLength) return;

      setCode(el => [...el, id]);
    }
  };

  const handlePressIn = () => setPressed(true);
  const handlePressOut = () => setPressed(false);

  return (
    <View key={`pin-${el}`} style={styles.pinSize}>
      {el === 'del' ? (
        <TouchableOpacity
          disabled={el === ''}
          style={[
            styles.pinButton,
            {borderWidth: typeof el !== 'number' ? 0 : 1.2},
          ]}
          onPress={() => handleNumberPress(el)}>
          <DeleteSVG width={76} height={76} />
        </TouchableOpacity>
      ) : el === '' ? (
        <Pressable
          underlayColor={theme['main']}
          style={[
            styles.pinButton,
            {borderWidth: typeof el !== 'number' ? 0 : 1.2},
            pressed && {borderColor: theme['pin']['border']},
          ]}
          onPress={onPressTouchId}>
          <View style={{width: 40, height: 40, alignSelf: 'center'}}>
            {colorScheme === 'dark' ? (
              <TouchIDDarkSVG width={40} height={40} />
            ) : (
              <TouchIDSVG width={40} height={40} />
            )}
          </View>
        </Pressable>
      ) : (
        <TouchableHighlight
          disabled={el === ''}
          underlayColor={theme['main']}
          style={[
            styles.pinButton,
            {borderWidth: typeof el !== 'number' ? 0 : 1.2},
            pressed && {borderColor: theme['pin']['border']},
          ]}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => handleNumberPress(el)}>
          <Text
            style={[
              styles.pinText,
              {color: theme['pin']['default']},
              pressed && {color: theme['pin']['pressed']},
            ]}>
            {el}
          </Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

const PINCodeInputLogin = ({title, code, setCode, onPressTouchId}) => {
  const theme = useThemeColors();

  return (
    <View style={styles.container}>
      <View style={[styles.column, {gap: 20, alignItems: 'center'}]}>
        <Label size="head" label={title} />

        <View
          style={{
            flexDirection: 'row',
            gap: _spacing / 1,
            marginBottom: _spacing * 2,
          }}>
          {[...Array(pinLength).keys()].map(el => {
            const isSelected = code[el] != null;

            return (
              <View
                key={`pin-${el}`}
                style={{
                  width: pinSize / pinSizeControl,
                  height: pinSize / pinSizeControl,
                  borderRadius: pinSize,
                  borderWidth: 1.2,
                  backgroundColor: isSelected
                    ? theme['pin']['bubble']
                    : 'transparent',
                  borderColor: isSelected ? theme['pin']['bubble'] : '#979797',
                }}
              />
            );
          })}
        </View>
      </View>

      <View style={styles.pinContainer}>
        {dialPad?.map(el => (
          <PinButton
            key={`pin-${el}`}
            el={el}
            code={code}
            setCode={setCode}
            onPressTouchId={onPressTouchId}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinSize: {
    width: '33.33%',
  },
  pinContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: _spacing,
  },
  pinButton: {
    width: 76,
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: '#979797',
    margin: 10,
  },
  pinText: {
    fontSize: 30,
  },
});

export default PINCodeInputLogin;
