import { combineReducers, createSlice } from '@reduxjs/toolkit';

// Define initial state for width
const Project_Id_Initial_State = {
    projectId: '',
};

const projectIDSlice = createSlice({
    name: 'projectId',
    initialState: Project_Id_Initial_State,
    reducers: {
      setProjectId: (state, action) => {
        state.projectId = action.payload;
      },
    },
});

export const { setProjectId } = projectIDSlice.actions;
export const selectProjectId = ({project}: any) => project.projectId.projectId;

// Combine reducers
const ProjectReducer = combineReducers({
  projectId: projectIDSlice.reducer,
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof ProjectReducer>;

export default ProjectReducer;
