import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
export const Header = () => {
	return (
		<div className="header">
			<ul>
				<div>
					<NavLink to="/todoList">All todos</NavLink>
					<NavLink to="/todoList">Completed todos</NavLink>
					<NavLink to="/todoList">Pending todos</NavLink>
				</div>
				<div>
					<NavLink to="/login">Login</NavLink>
				</div>
			</ul>
		</div>
	);
};
