// src/features/todo/todoSlice.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITask } from "../types/interface";

 export interface TasksState {
  tasks: ITask[];
}

const initialState: TasksState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: { payload: string }) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      let check = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (check !== -1) {
        state.tasks[check] = action.payload;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = todoSlice.actions;

export default todoSlice.reducer;
