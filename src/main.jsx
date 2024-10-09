import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { LoginPage } from "./Pages/LoginPage/LoginPage.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "todoList",
				element: <TodoList />,
			},
		],
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
]);
createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
