import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFrozenFood, addReview } from "../API/backend";
import { useNavigate } from "react-router-dom";
import yellowStar from "../assets/yellow-star.png";
import "./FoodReviews.css";

export default function FoodReviews() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [foodName, setFoodName] = useState("");
	const [message, setMessage] = useState("");
	const [tempRating, setTempRating] = useState(1);
	const [rating, setRating] = useState(1);
	const [reviewer, setReviewer] = useState("");
	const [review, setReview] = useState("");

	const starsArray = Array.from({ length: 5 });

	useEffect(() => {
		const getFrozenFood = async (id) => {
			const foodData = await fetchFrozenFood(id);
			setFoodName(foodData.name);
		};

		getFrozenFood(id);
	}, [id]);

	const handleSubmit = async (e) => {
		console.log("handleSubmit");
		e.preventDefault();

		const formData = new FormData();
		formData.append("foodID", id);
		formData.append("review", review);
		formData.append("rating", rating);
		formData.append("reviewer", reviewer);
		addReview(formData);
		setReview("");
		setReviewer("");
		setRating(1);
		setTempRating(1);
		setMessage("Food review added successfully!");
		navigate(`/frozen-food/${id}`);
	};

	return (
		<div className="review-container">
			<h1 className="review-title">Add Review For "{foodName}"</h1>
			<form onSubmit={handleSubmit} className="review-form">
				<div className="stars">
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
								className="star"
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
								}}
							/>
						);
					})}
					<p>Rating: {rating}</p>
				</div>
				<input
					className="review-username"
					type="text"
					value={reviewer}
					onChange={(e) => setReviewer(e.target.value)}
					placeholder="Reviewer"
					required
				/>
				<input
					className="review-textbox"
					type="text"
					value={review}
					onChange={(e) => setReview(e.target.value)}
					placeholder="Type your review!"
					required
				/>
				<button type="submit" className="review-submit-button">
					Add Review
				</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
}
