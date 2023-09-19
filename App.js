import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import FeedStack from './src/headers/appBar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './src/redux';

export default function App() {
  
  const image = {uri: './assets/images/logo_negro.png'};

  return (
    <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
              <FeedStack/>
          </NavigationContainer>
        </PaperProvider>
    </Provider>
    
  );
};

registerRootComponent(App);