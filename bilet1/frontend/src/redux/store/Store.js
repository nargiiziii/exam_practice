import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/productSlice';
import basketSlice from '../features/basketSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products: productSlice,
  basket: basketSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// создаём store
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
