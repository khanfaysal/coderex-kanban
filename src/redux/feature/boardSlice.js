import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json"

export const boardSlice = createSlice({
    name: "board",
    initialState: data.board,
    reducers: {
        addTask: (state, action) => {
            const { title, description, newColIndex } =
              action.payload;
            const task = { title, description, status };
            const board = state.find((board) => board.isActive);
            const column = board.columns.find((col, index) => index === newColIndex);
            column.tasks.push(task);
          },
    }
})