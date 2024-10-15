// Local: http://localhost:4000
// Deployed: https://frozen-food-reviews.vercel.app
const backend_url = "http://localhost:4000";

export async function fetchFrozenFood(id) {
	console.log(id);
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
