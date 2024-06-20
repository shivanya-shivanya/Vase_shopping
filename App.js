import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

export default function App() {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
      <Toast/>
    </Provider >


  );
}
