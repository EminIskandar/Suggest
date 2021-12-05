import {  createSlice } from "@reduxjs/toolkit"; 
  
const  initialState = 'all'

const tagsSlice = createSlice({
    name: "tags",
    initialState: initialState,
    reducers:  {
        change : (state, {payload} ) => {
            return state = payload
        }
    }
});

export const { change } =tagsSlice.actions
    
export default tagsSlice;
     
   