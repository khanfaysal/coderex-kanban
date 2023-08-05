import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const initialState = data;

export const boardSlice = createSlice({

    name: "board",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { id, title, description, duedate, status } =
              action.payload;
            const newTask = {id, title, status, description, duedate };
            state.board[0].columns[0].tasks.push(newTask)
          },

        removeTask: (state, action) => {
          const {tasks} = action.payload;
          console.log(tasks, "tasks")
          state.board[0].columns[0].tasks = tasks;
        },  

        updateTask: (state, action) => {
          const {tasks} = action.payload;
          console.log(tasks, "tasks")
          state.board[0].columns[0].tasks = tasks;
        },
    }
})

export const {addTask, removeTask, updateTask} = boardSlice.actions;

export default boardSlice.reducer;