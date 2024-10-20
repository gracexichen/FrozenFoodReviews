const { getClient, storage } = require("./storageServices");
const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const fs = require("fs");
const { mongoose } = require("mongoose");


// HELPER FUNCTIONS
async function getPhotoUrl(frozenFood) {
	const imageBuffer = fs.readFileSync(frozenFood.path);
	const uint8Array = new Uint8Array(imageBuffer);
	const timestamp = Date.now();
	const photoRef = ref(storage, `frozenFood/${timestamp}.png`);
	await uploadBytes(photoRef, uint8Array);
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
	response.success = "Successfully added food!";
	return response;
}

async function getAllFoods() {
	const client = await getClient();
	const database = client.db("frozenfoodreviews");
	const frozenFoods = database.collection("frozenfoods");
	const frozenFoodObjs = await frozenFoods.find({}).toArray();
	return frozenFoodObjs;
}

async function getOneFood(id) {
	const client = await getClient();
	const database = client.db("frozenfoodreviews");
	const frozenFoods = database.collection("frozenfoods");
	const frozenFoodObj = await frozenFoods.findOne({
		_id: new mongoose.Types.ObjectId(id),
	});
	return frozenFoodObj;
}

async function getLeaderboardFoods() {
	// Gets top ten frozen foods
	const client = await getClient();
	const database = client.db("frozenfoodreviews");
	const frozenFoods = database.collection("frozenfoods");
	const frozenFoodObjs = await frozenFoods
		.find({})
		.sort({ rating: -1 })
		.limit(10)
		.toArray();
	return frozenFoodObjs;
}

module.exports = {
	addNewFood,
	getAllFoods,
	getOneFood,
	getLeaderboardFoods,
};
