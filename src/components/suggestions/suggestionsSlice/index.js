import {  createSlice } from "@reduxjs/toolkit"; 
import db from '../../../db/db.json'
  
const  initialState = db.productRequests

const suggestionsSlice = createSlice({
    name: "suggest",
    initialState: initialState,
    reducers:  {
        change : (state , {payload}) => {
            return state = payload
        }
    }
});

export const {change} = suggestionsSlice.actions
    
export default suggestionsSlice;
     
   