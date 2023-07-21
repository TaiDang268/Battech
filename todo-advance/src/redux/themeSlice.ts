import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toHaveErrorMessage } from "@testing-library/jest-dom/matchers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootReducer } from "./store";
const initialState: boolean = true;
const themSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: { payload: boolean }) => {
      return (state = action.payload);
    },
  },
});
export const { setTheme } = themSlice.actions;
export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootReducer) => state.theme);
  const actionSetTheme = (payload: boolean) => {
    dispatch(setTheme(payload));
  };
  return { theme, actionSetTheme };
};
export default themSlice;
