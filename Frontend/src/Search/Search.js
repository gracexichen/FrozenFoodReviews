import { useEffect, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { fetchFrozenFoods } from "../API/backend";

export default function Search() {
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
								<p className="foodDescription">
									Available at: {food.stores}
								</p>
								<p className="foodDescription">
									Rating: {food.rating}
								</p>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
}
