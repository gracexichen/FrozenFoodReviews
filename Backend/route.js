const express = require("express");
const multer = require("multer");
const path = require("path");
const {
	tester,
	addFrozenFood,
	getFrozenFoods,
	getFrozenFood,
	addReview,
	getReviews,
	getTopFoods,
} = require("./controller.js");

const router = express.Router();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const upload = multer({ storage });

/**
 * Tests if connected to backend
 * @input raw json
 * @returns success string
 */
router.get("/", tester);

/**
 * Adds a frozen food
 * @input form data
 * @param name - name of the frozen food
 * @param image - image of the frozen food
 * @param stores - list of stores that the frozen food is found at
 * @param nutritionLabel - nutrition label of frozen food
 * @returns success or error message
 */
router.post("/addFrozenFood", upload.any(), addFrozenFood);

/**
 * Gets all of the frozen food objects
 * #TODO: Fix so that it searches for most relevant matches
 * @input none
 * @returns all frozen food objects or error message
 */
router.get("/getFrozenFoods", getFrozenFoods);

/**
 * Gets the frozen food with the id
 * @input raw json
 * @param id - id of the frozen object to retrieve
 * @returns the frozen food object
 */
router.post("/getFrozenFood", getFrozenFood);

/**
 * Adds a review to a frozen food
 * @input form data
 * @param foodID - add review to this food
 * @param rating - review rating
 * @param reviewer - name of reviewer
 * @param review - review content/text
 * @returns success or error message
 */
router.post("/addReview", upload.none(), addReview);

/**
 * Get all reviews of a frozen food
 * @input raw json
 * @param foodID - the food to get all review for
 * @returns array of all reviews or error message
 */
router.post("/getReviews", getReviews);

/**
 * Get top ten foods sorted by rating
 * @returns array of top ten frozen foods (sorted by rating)
 */
router.get("/getTopFoods", getTopFoods);

module.exports = router;
