import { combineReducers, createSlice } from '@reduxjs/toolkit';

interface RootState {
  width: {
    width: number;
  };
  htmlTab: {
    htmlTab: boolean;
  };
  cssTab: {
    cssTab: boolean;
  };
  codeTab: {
    codeTab: boolean;
  };
}


// Define initial state for width
const initialWidthState = {
  width: 1259,
};

// Define initial state for html tab
const initialHtmlTabState = {
  htmlTab: true,
};

// Define initial state for css tab
const initialCssTabState = {
  cssTab: true,
};

// Define initial state for code tab
const initialCodeTabState = {
  codeTab: true,
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

// Create a slice for code tab state
const codeTabSlice = createSlice({
  name: 'codeTab',
  initialState: initialCodeTabState,
  reducers: {
    setCodeTab: (state, action) => {
      state.codeTab = action.payload;
    },
  },
});

// Combine the slices into a root reducer
const layoutReducer = combineReducers({
  width: widthSlice.reducer,
  htmlTab: htmlTabSlice.reducer,
  cssTab: cssTabSlice.reducer,
  codeTab: codeTabSlice.reducer,
});
// Export actions from slices
export const { setWidth } = widthSlice.actions;
export const { setHtmlTab } = htmlTabSlice.actions;
export const { setCssTab } = cssTabSlice.actions;

export const { setCodeTab } = codeTabSlice.actions;

// Export selectors for state
export const selectWidth = ({ layout }: any) => layout.width.width;
export const selectHtmlTab = ({ layout }: any) => layout.htmlTab.htmlTab;
export const selectCssTab = ({ layout }: any) => layout.cssTab.cssTab;
export const selectCodeTab = ({ layout }: any) => layout.codeTab.codeTab;



// Export the root reducer
export default layoutReducer;
