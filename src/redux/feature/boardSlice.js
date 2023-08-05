import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const initialState = data;

export const boardSlice = createSlice({

    name: "board",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { title, description, status, duedate } =
              action.payload;
            const newTask = { title, description, status, duedate };

            state.board[0].columns[0].tasks.push(newTask)
            
          },

        
    }
})

export const {addTask} = boardSlice.actions;

export default boardSlice.reducer;