import {  createSlice } from "@reduxjs/toolkit";  
  
const  initialState = false

const boardSlice = createSlice({
    name: "board",
    initialState: initialState,
    reducers:  {
        change : (state , {payload}) => {
            return state = payload
        }
    }
});

export const { change } = boardSlice.actions
    
export default boardSlice;
     
   