import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './width/screenLayout';

export const store = configureStore({
  reducer: layoutReducer,
});