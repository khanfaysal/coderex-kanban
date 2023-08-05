import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const initialState = data;

export const boardSlice = createSlice({

    name: "board",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { title, description, status, duedate, newColIndex } =
              action.payload;
            const task = { title, description, status, duedate,newColIndex };
            // const board = state.find((board) => board.isActive);
            // const column = board.columns.find((col, index) => index === newColIndex);
            // column.tasks.push(task);
          },

        
    }
})

export const {addTask} = boardSlice.actions;

export default boardSlice.reducer;