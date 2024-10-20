// Local: http://localhost:4000
// Deployed: https://frozen-food-reviews.vercel.app
const backend_url = "http://localhost:4000";

export async function fetchFrozenFood(id) {
	const result = await fetch(`${backend_url}/getFrozenFood`, {
		method: "post",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			id: id,
		}),
	});
	const frozenFood = await result.json();
	return frozenFood;
}

export async function fetchFrozenFoods() {
	const result = await fetch(`${backend_url}/getFrozenFoods`, {
		method: "GET",
	});
	const frozenFoods = await result.json();
	return frozenFoods;
}

export async function addFrozenFood(formData) {
	await fetch(`${backend_url}/addFrozenFood`, {
		method: "POST",
		body: formData,
	});
}

export async function addReview(formData) {
	console.log("addingReview");
	await fetch(`${backend_url}/addReview`, {
		method: "POST",
		body: formData,
	});
}

export async function getReviews(id) {
	const result = await fetch(`${backend_url}/getReviews`, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			foodID: id,
		}),
	});
	const reviews = await result.json();
	return reviews;
}

export async function getTopFoods(id) {
	const result = await fetch(`${backend_url}/getTopFoods`, {
		method: "get",
	});
	const frozenFoods = await result.json();
	return frozenFoods;
}