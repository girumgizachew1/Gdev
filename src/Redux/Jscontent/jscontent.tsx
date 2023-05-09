import { combineReducers, createSlice } from '@reduxjs/toolkit';

// Define initial state for width
const jscodeinitialstate = {
  jscode: '',
};

const jsCodeSlice = createSlice({
    name: 'jscode',
    initialState: jscodeinitialstate,
    reducers: {
      setJscode: (state, action) => {
        state.jscode = action.payload;
      },
    },
});

export const { setJscode } = jsCodeSlice.actions;
export const selectJsCode = ({jsCodeContent}: any) => jsCodeContent.jscode.jscode;

// Combine reducers
const jsCodeReducer = combineReducers({
  jscode: jsCodeSlice.reducer,
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof jsCodeReducer>;

export default jsCodeReducer;
