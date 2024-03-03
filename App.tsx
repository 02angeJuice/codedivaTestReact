import React, {useEffect} from 'react';

import AppRouter from './app/AppRouter';

import BootSplash from 'react-native-bootsplash';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {I18nextProvider} from 'react-i18next';
import i18n from './constants/i18n';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppRouter />
      </GestureHandlerRootView>
    </I18nextProvider>
  );
}

export default App;
