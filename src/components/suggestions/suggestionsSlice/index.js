import {  createSlice } from "@reduxjs/toolkit"; 
import db from '../../../db/db.json'
  
const  initialState = db.productRequests

const suggestionsSlice = createSlice({
    name: "tags",
    initialState: initialState,
    reducers:  {}
});
    
export default suggestionsSlice;
     
   