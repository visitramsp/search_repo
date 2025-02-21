navigator.geolocation = require('@react-native-community/geolocation');
import React, { useEffect, useState } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import Index from './src/navigation/stackNavigation';
import Toast from 'react-native-toast-message';
import { persistor, store } from './src/store/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/I18n/i18n';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SheetProvider } from 'react-native-actions-sheet';
import { ApplicationStyles } from './src/theme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { toastConfig } from './src/constants/ToastMessage';
import BootSplash from 'react-native-bootsplash';
import { checkInternetConnection } from './src/utils/networkUtils';
import { showToastError } from './src/utils';

export default function App() {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const getConnectionStatus = async () => {
      const connection = await checkInternetConnection();

      !connection && showToastError('no internet connection...');
      setIsConnected(connection);
    };

    getConnectionStatus();
  }, []);

  console.log(isConnected, 'isConnected');

  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <GestureHandlerRootView style={ApplicationStyles.flex1}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <MenuProvider>
              <BottomSheetModalProvider>
                <SheetProvider context="global">
                  <Index />
                  <Toast config={toastConfig} />
                </SheetProvider>
              </BottomSheetModalProvider>
            </MenuProvider>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
