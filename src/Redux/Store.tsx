import { combineReducers, configureStore } from '@reduxjs/toolkit';
import layoutReducer from './width/screenLayout';
import  HtmlCodeReducer  from './Htmlcontent/htmlcode';



export const store = configureStore({
 reducer: layoutReducer
});

