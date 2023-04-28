import { configureStore } from '@reduxjs/toolkit'
import widthReducer from './width/screenwidth'

export const store = configureStore({
  reducer: {
    width: widthReducer,
    }
})