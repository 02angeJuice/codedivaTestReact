/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SelectLanguage from './SelectLanguage';
import Disclaimer from './Disclaimer';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordSuccess from './ForgotPasswordSuccess';
import LoginOTP from './LoginOTP';
import LoginVerify from './LoginVerify';
import PincodeSet from './PincodeSet';
import TouchID from './TouchID';
import PincodeConfirm from './PincodeConfirm';
import TouchIDLogin from './TouchIDLogin';
import useThemeColors from '../hooks/useThemeColors';

const Stack = createNativeStackNavigator();

const AppScreen = () => {
  const theme = useThemeColors();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitle: '',
          headerTransparent: true,
          headerTintColor: theme.goback,
        }}>
        <Stack.Screen
          name="SelectLanguage"
          component={SelectLanguage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Disclaimer" component={Disclaimer} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginOTP" component={LoginOTP} />
        <Stack.Screen name="LoginVerify" component={LoginVerify} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="ForgotPasswordSuccess"
          component={ForgotPasswordSuccess}
        />

        <Stack.Screen name="PincodeSet" component={PincodeSet} />
        <Stack.Screen name="PincodeConfirm" component={PincodeConfirm} />
        <Stack.Screen name="TouchID" component={TouchID} />
        <Stack.Screen name="TouchIDLogin" component={TouchIDLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppScreen;
