const { getClient, storage } = require("./storageServices");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const fs = require("fs");
const { mongoose } = require("mongoose");

// HELPER FUNCTIONS
async function getPhotoUrl(frozenFood) {
	const timestamp = Date.now();
	const photoRef = ref(storage, `frozenFood/${timestamp}.png`);
	await uploadBytes(photoRef, frozenFood);
	const url = await getDownloadURL(photoRef);
	return url;
}

// MAIN FUNCTIONS
async function addNewFood(name, stores, image, nutritionLabel) {
	const response = {};
	const requiredFields = [name, stores, image, nutritionLabel];
	if (requiredFields.includes(undefined) || requiredFields.includes(null)) {
		response.error = "Missing one or more parameters.";
		return response;
	}
	const client = await getClient();
	const database = client.db("frozenfoodreviews");
	const frozenfoods = database.collection("frozenfoods");
	const imageUrl = await getPhotoUrl(image);
	const nutritionLabelUrl = await getPhotoUrl(image);

	const newFrozenFood = {
		name: name,
		stores: stores,
		image: imageUrl,
		nutritionLabel: nutritionLabelUrl,
		rating: -1,
	};
	await frozenfoods.insertOne(newFrozenFood);
	response.success = "Successfully added avatar!";
	return response;
}

async function getAllFoods() {
	const client = await getClient();
	const database = client.db("frozenfoodreviews");
	const sightings = database.collection("frozenfoods");
	const sightingObjects = await sightings.find({}).toArray();
	return sightingObjects;
}

module.exports = {
	addNewFood,
	getAllFoods,
};
