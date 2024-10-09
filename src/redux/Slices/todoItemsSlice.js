import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	todoItems: [],
	status: "idle", // idle, loading, succeeded, failed
	error: null,
};

export const fetchTodos = createAsyncThunk("todoItems/fetchTodos", async () => {
	const response = await axios("https://dummyjson.com/todos");
	return response.data;
});

export const todoItemsSlice = createSlice({
	name: "todoItems",
	initialState: initialState,
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		deleteTodo: (state, action) => {
			state = state.filter((todo) => todo.id !== action.payload);
		},
	},

	//builder looks like this {addCase: ƒ, addMatcher: ƒ, addDefaultCase: ƒ}
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.todoItems = action.payload.todos;
				state.status = "succeeded";
			})
			.addCase(fetchTodos.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { addTodo, deleteTodo } = todoItemsSlice.actions;

export default todoItemsSlice.reducer;
