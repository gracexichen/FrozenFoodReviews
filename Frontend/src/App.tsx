import "./App.css";
import Navbar from "./Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define the router with the main route
const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Home!</div>, // New path added
	},
	{
		path: "/search",
		element: <div>Search</div>,
	},
	{
		path: "/add",
		element: <div>Add</div>,
	},
	{
		path: "/leaderboard",
		element: <div>Leaderboard</div>,
	},
]);

function App() {
	return (
		<div className="app">
			<Navbar />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
