import { configureStore } from "@reduxjs/toolkit";
import todoItemReducer from "./Slices/todoItemsSlice";
export const store = configureStore({
	reducer: {
		todoItems: todoItemReducer,
	},
});
