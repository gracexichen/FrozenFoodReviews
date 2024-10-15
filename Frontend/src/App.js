import "./App.css";
import Search from "./Search/Search";
import Navbar from "./Navbar/Navbar";
import FoodDetail from "./Search/FoodDetail";
import Home from "./Home/Home";
import AddFrozenFood from "./Add/Add";
import Leaderbaord from "./Leaderboard/Leaderboard";
import FoodReviews from "./Search/FoodReviews";

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
		element: <Leaderbaord />,
	},
	{
		path: "/frozen-food/:id",
		element: <FoodDetail />,
	},
	{
		path: "/add-review/:id",
		element: <FoodReviews />,
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
