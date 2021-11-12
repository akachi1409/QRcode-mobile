import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/store';

import {
  View,
  Text,
} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator'

export default function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={<View><Text>Loading</Text></View>} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
  );
}