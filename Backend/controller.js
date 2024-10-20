const {
	addNewFood,
	getAllFoods,
	getOneFood,
	getLeaderboardFoods,
} = require("./scripts/frozenFoods");

const { addNewReview, getReviewsForFood } = require("./scripts/foodReviews");

function tester(req, res) {
	res.send("Hello from tester!");
}

async function addFrozenFood(req, res) {
	result = await addNewFood(
		req.body.name,
		req.body.stores,
		req.files.find((file) => file.fieldname === "image"),
		req.files.find((file) => file.fieldname === "label")
	);
	res.send(result);
}

async function getFrozenFoods(req, res) {
	result = await getAllFoods();
	res.send(result);
}

async function getFrozenFood(req, res) {
	result = await getOneFood(req.body.id);
	res.send(result);
}

async function addReview(req, res) {
	result = await addNewReview(
		req.body.foodID,
		req.body.rating,
		req.body.reviewer,
		req.body.review
	);
	res.send(result);
}

async function getReviews(req, res) {
	result = await getReviewsForFood(req.body.foodID);
	res.send(result);
}

async function getTopFoods(req, res) {
	result = await getLeaderboardFoods(req.body);
	res.send(result);
}

module.exports = {
	tester,
	addFrozenFood,
	getFrozenFoods,
	getFrozenFood,
	addReview,
	getReviews,
	getTopFoods,
};
