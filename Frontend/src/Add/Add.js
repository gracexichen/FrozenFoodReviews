import React, { useState } from "react";
import "./Add.css";
import { addFrozenFood } from "../API/frozenfood";

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

		addFrozenFood(formData);

		setName("");
		setStores("");
		setImage(null);
		setLabel(null);
		setMessage("Frozen food added successfully!");
	};

	return (
		<div className="container">
			<h1 className="add-title">Add Frozen Food</h1>
			<form onSubmit={handleSubmit} className="form">
				<div className="field-container">
					<label className="fields">Name:</label>
					<input
						className="input-box"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="field-container">
					<label className="fields">Stores (comma separated):</label>
					<input
						className="input-box"
						type="text"
						value={stores}
						onChange={(e) => setStores(e.target.value)}
						required
					/>
				</div>
				<div className="field-container">
					<label className="fields">Image:</label>
					<input
						className="input-box"
						type="file"
						onChange={(e) => setImage(e.target.files[0])}
						accept="image/*"
						required
					/>
				</div>
				{image && (
					<img
						src={URL.createObjectURL(image)}
						alt="Selected"
						className="image-preview"
					/>
				)}
				<div className="field-container">
					<label className="fields">Nutrition Label:</label>
					<input
						className="input-box"
						type="file"
						onChange={(e) => setLabel(e.target.files[0])}
						accept="image/*,application/pdf"
						required
					/>
				</div>
				{label && (
					<img
						src={URL.createObjectURL(label)}
						alt="Label Preview"
						className="image-preview"
					/>
				)}
				<button type="submit" className="submit-button">
					Add Frozen Food
				</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
};

export default AddFrozenFood;
