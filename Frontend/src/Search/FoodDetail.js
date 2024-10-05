import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./FoodDetail.css";

async function fetchFrozenFood(id) {
	console.log(id);
	const result = await fetch(
		"https://frozen-food-reviews.vercel.app/getFrozenFood",
		{
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: id,
			}),
		}
	);
	const frozenFood = await result.json();
	return frozenFood;
}

export default function FoodDetail() {
	const { id } = useParams();
	const [frozenFood, setFrozenFood] = useState("");

	useEffect(() => {
		const getFrozenFood = async (foodId) => {
			const foodData = await fetchFrozenFood(foodId);
			setFrozenFood(foodData);
		};

		getFrozenFood(id);
	}, [id]);

	return (
		<div className="container">
			<div className="detail-container">
				<div className="food-information">
					<h1 className="food-name">{frozenFood.name}</h1>
					<h2 className="stores">{frozenFood.stores}</h2>
					<div>
						<img className="food-pic" src={frozenFood.image}></img>
						<img
							className="food-label"
							src={frozenFood.nutritionLabel}
						></img>
					</div>
				</div>
				<div className="reviews">
					<h1 className="food-name">Reviews</h1>
					<div className="review">
						<p>To Be Developed! :)</p>
					</div>
				</div>
			</div>
		</div>
	);
}
