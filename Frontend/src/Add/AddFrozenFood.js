import React, { useState } from "react";
import "./Add.css";

const AddFrozenFood = () => {
	const [name, setName] = useState("");
	const [stores, setStores] = useState("");
	const [image, setImage] = useState(null);
	const [label, setLabel] = useState(null);
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("stores", stores);
		formData.append("image", image);
		formData.append("label", label);

		await fetch("http://localhost:4000/addFrozenFood", {
			method: "POST",
			body: formData,
		});
	};

	return (
		<div className="container">
			<h2>Add Frozen Food</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Stores (comma separated):</label>
					<input
						type="text"
						value={stores}
						onChange={(e) => setStores(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Image:</label>
					<input
						type="file"
						onChange={(e) => setImage(e.target.files[0])}
						accept="image/*"
						required
					/>
				</div>
				<div>
					<label>Nutrition Label:</label>
					<input
						type="file"
						onChange={(e) => setLabel(e.target.files[0])}
						accept="image/*,application/pdf"
						required
					/>
				</div>
				<button type="submit">Add Frozen Food</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
};

export default AddFrozenFood;
