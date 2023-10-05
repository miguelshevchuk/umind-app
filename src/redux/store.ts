import { configureStore } from '@reduxjs/toolkit'
import { umindSlice, State } from './reducers/slice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist';

const persistConfiguration = {
  key: 'umind',
  storage: AsyncStorage,
  whitelist: ['umind'],
};

export const store = configureStore({
  reducer: {
    umind: persistReducer<State, any>(
      persistConfiguration,
      umindSlice.reducer,
    ),
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export const persistedStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;