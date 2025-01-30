import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../../features/todo/model";

interface IState {
  commonTodos: ITodo[];
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  commonTodos: [],
  isLoading: false,
  error: "",
}

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    getLocalData: (state, { payload }) => {
      state.commonTodos = payload;
    },
    addTodo: (state, { payload }) => {
      state.commonTodos.push(payload)
    }
  }
})

export default commonSlice.reducer;

export const { getLocalData, addTodo } = commonSlice.actions;