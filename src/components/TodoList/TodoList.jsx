import React from "react";
import { useSelector } from "react-redux";
import { TodoCard } from "../TodoCard/TodoCard";
import "./TodoList.css";
export const TodoList = () => {
	const todos = useSelector((state) => state.todoItems.todoItems);
	console.log(todos);
	return (
		<div className="todo-list">
			{todos.map((todo) => {
				return (
					<TodoCard
						key={todo.id}
						todo={todo.todo}
						completed={todo.completed}
						userId={todo.userId}
					/>
				);
			})}
		</div>
	);
};
