import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json"

export const boardSlice = createSlice({
    name: "board",
    initialState: data.board,
    reducers: {
        
    }
})