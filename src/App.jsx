import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo/CreateTodo";
import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { fetchTodos } from "./redux/Slices/todoItemsSlice";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTodos());
	}, []);

	return (
		<>
			<Header />
			<CreateTodo />
			<Outlet />
		</>
	);
}

export default App;
