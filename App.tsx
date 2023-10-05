import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import FeedStack from './src/headers/appBar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistedStore } from './src/redux';

function App() {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor = {persistedStore} >
        <PaperProvider>
          <NavigationContainer>
              <FeedStack/>
          </NavigationContainer>
        </PaperProvider>
        </PersistGate>
    </Provider>
    
  );
};

export default App;
