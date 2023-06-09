import { combineReducers, configureStore } from '@reduxjs/toolkit';
import layoutReducer from './width/screenLayout';
import  HtmlCodeReducer  from './Htmlcontent/htmlcode';
import ProjectReducer from './ProjectStructure/Project';
import cssCodeReducer from './Csscontent/csscode';
import jsCodeReducer from './Jscontent/jscontent';
const reducer = combineReducers({
    layout: layoutReducer,
    project: ProjectReducer,
    htmlCodeContent: HtmlCodeReducer,
    cssCodeContent: cssCodeReducer,
    jsCodeContent: jsCodeReducer
})

export const store = configureStore({
 reducer: reducer
});

