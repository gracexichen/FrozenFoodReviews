import "./App.css";
import Search from "./Search/Search";
import Navbar from "./Navbar/Navbar";
import FoodDetail from "./Search/FoodDetail";
import Home from "./Home/Home";
import AddFrozenFood from "./Add/Add";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Define the router with the main route
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />, // New path added
	},
	{
		path: "/search",
		element: <Search />,
	},
	{
		path: "/add",
		element: <AddFrozenFood />,
	},
	{
		path: "/leaderboard",
		element: <div>Leaderboard</div>,
	},
	{
		path: "/frozen-food/:id",
		element: <FoodDetail />,
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