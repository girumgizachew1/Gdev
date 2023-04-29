import { combineReducers, createSlice } from '@reduxjs/toolkit';

// Define initial state for width
const initialWidthState = {
  width: 320,
};

// Define initial state for html tab
const initialHtmlTabState = {
  htmlTab: true,
};

// Define initial state for css tab
const initialCssTabState = {
  cssTab: true,
};

// Create a slice for width state
const widthSlice = createSlice({
  name: 'width',
  initialState: initialWidthState,
  reducers: {
    setWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

// Create a slice for html tab state
const htmlTabSlice = createSlice({
  name: 'htmlTab',
  initialState: initialHtmlTabState,
  reducers: {
    setHtmlTab: (state, action) => {
      state.htmlTab = action.payload;
    },
  },
});

// Create a slice for css tab state
const cssTabSlice = createSlice({
  name: 'cssTab',
  initialState: initialCssTabState,
  reducers: {
    setCssTab: (state, action) => {
      state.cssTab = action.payload;
    },
  },
});

// Combine the slices into a root reducer
const layoutReducer = combineReducers({
  width: widthSlice.reducer,
  htmlTab: htmlTabSlice.reducer,
  cssTab: cssTabSlice.reducer,
});

// Export actions from slices
export const { setWidth } = widthSlice.actions;
export const { setHtmlTab } = htmlTabSlice.actions;
export const { setCssTab } = cssTabSlice.actions;

// Export selectors for state
export const selectWidth = (state:any) => state.width.width;
export const selectHtmlTab = (state:any) => state.htmlTab.htmlTab;
export const selectCssTab = (state:any) => state.cssTab.cssTab;

// Export the root reducer
export default layoutReducer;
