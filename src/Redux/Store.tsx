import { combineReducers, configureStore } from '@reduxjs/toolkit';
import layoutReducer from './width/screenLayout';
import  HtmlCodeReducer  from './Htmlcontent/htmlcode';
import ProjectReducer from './ProjectStructure/Project';

const reducer = combineReducers({
    layout: layoutReducer,
    project: ProjectReducer
})

export const store = configureStore({
 reducer: reducer
});

