import { combineReducers, createSlice } from '@reduxjs/toolkit';

// Define initial state for width
const csscodeinitialstate = {
  csscode: '',
};

const cssCodeSlice = createSlice({
    name: 'csscode',
    initialState: csscodeinitialstate,
    reducers: {
      setcsscode: (state, action) => {
        state.csscode = action.payload;
      },
    },
});

export const { setcsscode } = cssCodeSlice.actions;
export const selectCssCode = ({cssCodeContent}: any) => cssCodeContent.csscode.csscode;

// Combine reducers
const cssCodeReducer = combineReducers({
  csscode: cssCodeSlice.reducer,
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof cssCodeReducer>;

export default cssCodeReducer;
