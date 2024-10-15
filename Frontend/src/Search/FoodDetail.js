import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FoodDetail.css";
import { fetchFrozenFood } from "../API/frozenfood";

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
						<p>This is a very good review </p>
					</div>
					<Link className="add-review-btn" to={`/add-review/${id}`}>
						Add Your Own Review
					</Link>
				</div>
			</div>
		</div>
	);
}
