import { configureStore } from "@reduxjs/toolkit";
import taskSlice, { TasksState } from "./taskSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import themeSlice from "./themeSlice";

const reducers = combineReducers({
  tasks: taskSlice,
  [themeSlice.name]: themeSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
export interface RootReducer {
  theme: boolean;
  tasks: TasksState;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
