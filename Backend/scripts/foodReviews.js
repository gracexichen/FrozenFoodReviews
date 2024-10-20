const { getClient, storage } = require("./storageServices");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const fs = require("fs");
const { mongoose } = require("mongoose");

async function addNewReview(foodID, rating, reviewer, review) {
	updateRating(foodID);
	const response = {};
	const requiredFields = [foodID, rating, reviewer, review];
	if (requiredFields.includes(undefined) || requiredFields.includes(null)) {
		response.error = "Missing one or more parameters.";
		return response;
	}
	const client = await getClient();
	const database = client.db("frozenfoodreviews");
	const reviews = database.collection("reviews");
	const curDate = new Date().toLocaleDateString();

	const newReview = {
		foodID: foodID,
		rating: rating,
		reviewer: reviewer,
		review: review,
		date: curDate,
	};
	await reviews.insertOne(newReview);
	response.success = "Successfully added review!";
	return response;
}

async function updateRating(foodID) {
	const client = await getClient();
	const database = client.db("frozenfoodreviews");
	const frozenfoods = database.collection("frozenfoods");
	const reviews = database.collection("reviews");

	const reviewObjs = await reviews
		.find({
			foodID: foodID,
		})
		.toArray();

	let ratingTot = 0;
	let count = 0;
	for (const review of reviewObjs) {
		ratingTot += Number(review.rating);
		count += 1;
	}
	const newRating = ratingTot / count;
	const roundedRating = parseFloat(newRating.toFixed(2));

	await frozenfoods.updateOne(
		{ _id: new mongoose.Types.ObjectId(foodID) },
		{ $set: { rating: roundedRating } }
	);
}

async function getReviewsForFood(foodID) {
	const client = await getClient();
	const database = client.db("frozenfoodreviews");
	const reviews = database.collection("reviews");
	const reviewObjs = await reviews
		.find({
			foodID: foodID,
		})
		.toArray();
	return reviewObjs;
}

module.exports = { addNewReview, getReviewsForFood };
