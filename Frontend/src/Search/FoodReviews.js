import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFrozenFood } from "../API/frozenfood";
// import star from "../assets/white-star.png";
import yellowStar from "../assets/yellow-star.png";
import "./FoodReviews.css";

function handleSubmit() {}
export default function FoodReviews() {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [stores, setStores] = useState("");
	const [message, setMessage] = useState("");
	const [foodName, setFoodName] = useState("");
	const [tempRating, setTempRating] = useState(0);
	const [rating, setRating] = useState(0);

	const starsArray = Array.from({ length: 5 });

	useEffect(() => {
		const getFrozenFood = async (id) => {
			const foodData = await fetchFrozenFood(id);
			setFoodName(foodData.name);
		};

		getFrozenFood(id);
	}, [id]);

	return (
		<div className="review-container">
			<h1 className="review-title">Add Review For "{foodName}"</h1>
			<form onSubmit={handleSubmit} className="review-form">
				<label className="review-fields">Reviewer:</label>
				<input
					className="review-input-box"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<label className="review-fields">Rating:</label>
				<div>
					{starsArray.map((_, index) => {
						let filterStyle;
						if (rating !== 0) {
							if (index < rating) {
								filterStyle = "none";
							} else {
								filterStyle =
									index < tempRating
										? "none"
										: "grayscale(100%)";
							}
						} else {
							filterStyle =
								index < tempRating ? "none" : "grayscale(100%)";
						}
						return (
							<img
								key={index}
								src={yellowStar}
								className="stars"
								style={{
									filter: filterStyle,
								}}
								onMouseEnter={() => {
									setTempRating(index + 1);
								}}
								onMouseLeave={() => {
									setTempRating(0);
								}}
								onClick={() => {
									setRating(index + 1);
									console.log(index + 1);
								}}
							/>
						);
					})}
				</div>
				<label className="review-fields">Review:</label>
				<input
					className="review-input-box"
					type="text"
					value={stores}
					onChange={(e) => setStores(e.target.value)}
					required
				/>
				<button type="submit" className="review-submit-button">
					Add Review
				</button>
			</form>
		</div>
	);
}
