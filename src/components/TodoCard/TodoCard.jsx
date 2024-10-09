import React from "react";
import "./TodoCard.css";
export const TodoCard = ({ userId, todo, completed }) => {
	return (
		<div className="todo-card">
			<input type="checkbox" checked={completed} />
			<h3>User ID: {userId}</h3>
			<p>{todo}</p>
			<button>Delete</button>
		</div>
	);
};
