import { useParams } from "react-router-dom";

export default function FoodDetail() {
	const { name } = useParams<{ name: string }>();

	return (
		<div className="container">
			<h1>{name}</h1>
			<p>Details about {name} will go here...</p>
		</div>
	);
}
