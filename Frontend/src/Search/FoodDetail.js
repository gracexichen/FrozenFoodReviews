import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FoodDetail.css";
import { fetchFrozenFood, getReviews } from "../API/backend";
import yellowStar from "../assets/yellow-star.png";

export default function FoodDetail() {
	const { id } = useParams();
	const [frozenFood, setFrozenFood] = useState("");
	const [reviews, setReviews] = useState([]);
	const starsArray = Array.from({ length: 5 });

	useEffect(() => {
		const getFrozenFood = async (foodId) => {
			const foodData = await fetchFrozenFood(foodId);
			setFrozenFood(foodData);
		};
		const retrieveReviews = async (foodId) => {
			const reviewObjs = await getReviews(foodId);
			setReviews(reviewObjs);
		};

		getFrozenFood(id);
		retrieveReviews(id);
	}, [id]);

	return (
		<div className="container">
			<div className="detail-container">
				<div className="food-information">
					<h1 className="food-name">{frozenFood.name}</h1>
					<h3>Rating: {frozenFood.rating}</h3>
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
					<div className="all-reviews">
						{reviews.map((review, index) => (
							<div key={index} className="review">
								<h1 className="reviewer-name">
									{review.reviewer}
								</h1>
								<p>{review.date}</p>
								<div>
									{starsArray.map((star, i) => (
										<img
											key={i}
											src={yellowStar}
											className="review-star"
											style={{
												filter:
													i < review.rating
														? "none"
														: "grayscale(100%)",
											}}
										/>
									))}
								</div>
								<p className="review-content">
									{review.review}
								</p>
							</div>
						))}
					</div>
					<Link className="add-review-btn" to={`/add-review/${id}`}>
						Add Your Own Review
					</Link>
				</div>
			</div>
		</div>
	);
}
