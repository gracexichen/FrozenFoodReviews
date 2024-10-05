const express = require("express");
const multer = require("multer");
const path = require("path");
const { tester, addFrozenFood } = require("./controller.js");

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
 */
router.post("/addFrozenFood", upload.any(), addFrozenFood);
module.exports = router;
