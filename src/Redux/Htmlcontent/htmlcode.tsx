import { combineReducers, createSlice } from '@reduxjs/toolkit';

// Define initial state for width
const htmlcodeinitialstate = {
  htmlcode: '',
};

const htmlCodeSlice = createSlice({
    name: 'htmlcode',
    initialState: htmlcodeinitialstate,
    reducers: {
      sethtmlcode: (state, action) => {
        state.htmlcode = action.payload;
      },
    },
});

export const { sethtmlcode } = htmlCodeSlice.actions;
export const selectHtmlCode = ({htmlCodeContent}: any) => htmlCodeContent.htmlcode.htmlcode;

// Combine reducers
const HtmlCodeReducer = combineReducers({
  htmlcode: htmlCodeSlice.reducer,
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof HtmlCodeReducer>;

export default HtmlCodeReducer;
