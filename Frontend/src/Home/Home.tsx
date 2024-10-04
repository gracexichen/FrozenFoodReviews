import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="home-container">
			<h1 className="home-title">Welcome to Frozen Food Reviews!</h1>
			<p className="home-description">
				Love the frozen foods but unsure which ones are worth trying?
				Frozen Food Reviews is your go-to spot for discovering,
				reviewing, and sharing your favorite frozen meals!
			</p>
			<div className="feature-list">
				<div className="feature-card">
					<h2>Explore Reviews</h2>
					<p>
						Find honest reviews from frozen food enthusiasts like
						you!
					</p>
				</div>
				<div className="feature-card">
					<h2>Add Your Own Reviews</h2>
					<p>Share your thoughts on the frozen meals you've tried.</p>
				</div>
				<div className="feature-card">
					<h2>Check the Leaderboard!</h2>
					<p>
						Discover the top-rated frozen foods as voted by the
						community!
					</p>
				</div>
			</div>
			<div className="cta-section">
				<Link className="start-button" to={"/search"}>
					Start Exploring!
				</Link>
			</div>
		</div>
	);
}
