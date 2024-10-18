const { getClient, storage } = require("./storageServices");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const fs = require("fs");
const { mongoose } = require("mongoose");

async function addNewReview(foodID, rating, reviewer, review) {
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
