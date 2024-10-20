import "./Leaderboard.css";
import { useEffect, useState } from "react";
import { getTopFoods } from "../API/backend";

const Leaderboard = () => {
	const [topFoods, setTopFoods] = useState([]);

	useEffect(() => {
		const getLeaderboardFoods = async () => {
			const leaderboardFoods = await getTopFoods();
			setTopFoods(leaderboardFoods);
		};

		getLeaderboardFoods();
	}, []);

	return (
		<div className="ldr-background">
			<div className="ldr-top">
				<h1 className="ldr-title">Leaderboard</h1>
				<p className="ldr-description">
					Discover the top-rated frozen foods as voted by the
					community!
				</p>
			</div>
			<div className="ldr-winners">
				<div className="ldr-2">
					<div className="ldr-2-profile">
						<img
							className="ldr-image"
							src={topFoods[1] && topFoods[1].image}
						></img>
					</div>
					<div className="ldr-2-info">
						<h3 className="ldr-food-name">
							[2] {topFoods[1] && topFoods[1].name}
						</h3>
						<p>Rating: {topFoods[1] && topFoods[1].rating}</p>
					</div>
				</div>
				<div className="ldr-1">
					<div className="ldr-1-profile">
						<img
							className="ldr-image"
							src={topFoods[0] && topFoods[0].image}
						></img>
					</div>
					<div className="ldr-1-info">
						<h3 className="ldr-food-name">
							[1] {topFoods[0] && topFoods[0].name}
						</h3>
						<p>Rating: {topFoods[0] && topFoods[0].rating}</p>
					</div>
				</div>
				<div className="ldr-3">
					<div className="ldr-3-profile">
						<img
							className="ldr-image"
							src={topFoods[2] && topFoods[2].image}
						></img>
					</div>
					<div className="ldr-3-info">
						<h3 className="ldr-food-name">
							[3] {topFoods[2] && topFoods[2].name}
						</h3>
						<p>Rating: {topFoods[2] && topFoods[2].rating}</p>
					</div>
				</div>
			</div>
			<div className="ldr-rest">
				{topFoods.slice(3).map((topFood, index) => (
					<div className="ldr-remaining">
						<h3 key={topFood.id}>
							[{index + 4}] {topFood.name}
						</h3>
						<h3>Rating: {topFood.rating}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Leaderboard;
