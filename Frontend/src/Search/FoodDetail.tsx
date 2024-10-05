import { useParams } from "react-router-dom";

export default function FoodDetail() {
	const { id } = useParams<{ id: string }>();

	return (
		<div className="container">
			<h1>{id}</h1>
			<p>Details about {id} will go here...</p>
		</div>
	);
}
