import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './Slices/carsSlice';
import { rootReducer } from './Slices/rootSlice';
import { modalReducer } from './Slices/modalSlice';
import { favoriteReducer } from './Slices/favoriteSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const carPersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favoriteCars'],
};

const store = configureStore({
  reducer: {
    cars: carsReducer,
    root: rootReducer,
    modal: modalReducer,
    favorite: persistReducer(carPersistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
