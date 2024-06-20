import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import storage from '@react-native-async-storage/async-storage'
import {
  persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: "root",
  storage,
  version: 1
}
const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart: persistedReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)

export type Rootstate = ReturnType<typeof store.getState>;
