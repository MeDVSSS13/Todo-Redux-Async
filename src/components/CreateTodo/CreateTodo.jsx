import React from "react";
import "./CreateTodo.css";
export const CreateTodo = () => {
	return (
		<div className="create-todo">
			<form action="">
				<input type="text" placeholder="Input your task" />
				<button type="submit">Add task</button>
			</form>
		</div>
	);
};
