import "./Search.css";
import { Link } from "react-router-dom";

type FrozenFood = {
	id: number;
	name: string;
	stores: string[];
	pictureUrl: string;
	nutritionUrl: string;
	rating: number;
};

export default function Search() {
	const dumplingPic = require("../assets/frozen-dumplings.jpeg");
	const pizzaPic = require("../assets/pizza.jpg");
	const frozenFoods: FrozenFood[] = [
		{
			id: 1,
			name: "Frozen Pizza",
			stores: ["Walmart", "Target", "Costco"],
			pictureUrl: pizzaPic,
			nutritionUrl: "https://example.com/frozen-pizza-nutrition.pdf",
			rating: 4.5,
		},
		{
			id: 2,
			name: "Frozen Dumplings",
			stores: ["Trader Joe's", "Whole Foods", "Safeway"],
			pictureUrl: dumplingPic,
			nutritionUrl: "https://example.com/frozen-dumplings-nutrition.pdf",
			rating: 4.7,
		},
		{
			id: 3,
			name: "Frozen Dumplings",
			stores: ["Trader Joe's", "Whole Foods", "Safeway"],
			pictureUrl: dumplingPic,
			nutritionUrl: "https://example.com/frozen-dumplings-nutrition.pdf",
			rating: 4.7,
		},
		{
			id: 4,
			name: "Frozen Dumplings",
			stores: ["Trader Joe's", "Whole Foods", "Safeway"],
			pictureUrl: dumplingPic,
			nutritionUrl: "https://example.com/frozen-dumplings-nutrition.pdf",
			rating: 4.7,
		},
		{
			id: 5,
			name: "Frozen Dumplings",
			stores: ["Trader Joe's", "Whole Foods", "Safeway"],
			pictureUrl: dumplingPic,
			nutritionUrl: "https://example.com/frozen-dumplings-nutrition.pdf",
			rating: 4.7,
		},
		{
			id: 6,
			name: "Frozen Dumplings",
			stores: ["Trader Joe's", "Whole Foods", "Safeway"],
			pictureUrl: dumplingPic,
			nutritionUrl: "https://example.com/frozen-dumplings-nutrition.pdf",
			rating: 4.7,
		},
		{
			id: 7,
			name: "Frozen Dumplings",
			stores: ["Trader Joe's", "Whole Foods", "Safeway"],
			pictureUrl: dumplingPic,
			nutritionUrl: "https://example.com/frozen-dumplings-nutrition.pdf",
			rating: 4.7,
		},
		{
			id: 8,
			name: "Frozen Dumplings",
			stores: ["Trader Joe's", "Whole Foods", "Safeway"],
			pictureUrl: dumplingPic,
			nutritionUrl: "https://example.com/frozen-dumplings-nutrition.pdf",
			rating: 4.7,
		},
	];

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
							key={food.id}
							className="frozenFood"
							to={`/frozen-food/${food.id}`}
						>
							<img
								src={food.pictureUrl}
								alt={food.name}
								className="foodImage"
							/>
							<div className="foodText">
								<h2 className="foodName">{food.name}</h2>
								<p>Available at: {food.stores.join(", ")}</p>
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
