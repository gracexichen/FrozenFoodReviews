import "./Navbar.css";
import home from "../assets/home.png";
import add from "../assets/add.png";
import search from "../assets/search.png";
import leaderboard from "../assets/leaderboard.png";

export default function Navbar() {
	return (
		<nav className="navbar">
			<ul className="pages">
				<li className="website-name">
					<a className="website-title" href="/">
						<span className="navbar-name">Frozen Food Reviews</span>
						<img src={home} className="navbar-icon"></img>
					</a>
				</li>
				<li className="page">
					<a className="title" href="/search">
						<span className="navbar-name">Search</span>
						<img src={search} className="navbar-icon"></img>
					</a>
				</li>
				<li className="page">
					<a className="title" href="/add">
						<span className="navbar-name">Add Frozen Food</span>
						<img src={add} className="navbar-icon"></img>
					</a>
				</li>
				<li className="page">
					<a className="title" href="/leaderboard">
						<span className="navbar-name">Leaderboard</span>
						<img src={leaderboard} className="navbar-icon"></img>
					</a>
				</li>
			</ul>
		</nav>
	);
}
