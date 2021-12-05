import {  createSlice } from "@reduxjs/toolkit"; 
  
const  initialState = 'all'

const tagsSlice = createSlice({
    name: "tags",
    initialState: initialState,
    reducers:  {
        change : (state, {payload} ) => {
            state = payload
        }
    }
});

export const { change } = todosSlice.actions
    
export default tagsSlice;
     
   