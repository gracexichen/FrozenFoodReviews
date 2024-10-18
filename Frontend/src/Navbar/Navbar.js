import "./Navbar.css";
export default function Navbar() {
	return (
		<nav className="navbar">
			<ul className="pages">
				<li className="website-name">
					<a className="website-title" href="/">
						Frozen Food Reviews
					</a>
				</li>
				<li className="page">
					<a className="title" href="/search">
						Search
					</a>
				</li>
				<li className="page">
					<a className="title" href="/add">
						Add Frozen Food
					</a>
				</li>
				<li className="page">
					<a className="title" href="/leaderboard">
						Leaderboard
					</a>
				</li>
			</ul>
		</nav>
	);
}
