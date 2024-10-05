import { useEffect, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

async function fetchFrozenFoods() {
	const result = await fetch(
		"https://frozen-food-reviews.onrender.com/getFrozenFoods",
		{
			method: "GET",
		}
	);
	const frozenFoods = await result.json();
	return frozenFoods;
}

export default function Search() {
	const dumplingPic = require("../assets/frozen-dumplings.jpeg");
	const pizzaPic = require("../assets/pizza.jpg");
	const [frozenFoods, setFrozenFoods] = useState([]);

	useEffect(() => {
		const getFrozenFoods = async () => {
			setFrozenFoods(await fetchFrozenFoods());
		};
		getFrozenFoods();
	}, []);

	return (
		<div className="container">
			<input
				className="searchBar"
				placeholder="Frozen Food Name or Grocery Store"
			/>
			<h1 className="caption">
				Search for reviews of a frozen food by name or grocery store!
			</h1>
			<div className="foodDisplay">
				{frozenFoods &&
					frozenFoods.map((food) => (
						<Link
							key={food._id}
							className="frozenFood"
							to={`/frozen-food/${food._id}`}
						>
							<img
								src={food.image}
								alt={food.name}
								className="foodImage"
							/>
							<div className="foodText">
								<h2 className="foodName">{food.name}</h2>
								<p>Available at: {food.stores}</p>
								<a
									href={food.nutritionUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									View Nutrition Info
								</a>
								<p>Rating: {food.rating}</p>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
}
