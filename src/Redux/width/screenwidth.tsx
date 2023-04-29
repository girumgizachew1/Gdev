import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    width: 320
}

const widthSlice = createSlice({
  name: 'width',
  initialState ,
  reducers: {
    setWidth : (state, action) =>{
        state.width = action.payload;
    }
  }
})
export const selectWidth = (state: { width: { width: any; }; }) => state.width.width;
export const { setWidth } = widthSlice.actions
export default widthSlice.reducer
