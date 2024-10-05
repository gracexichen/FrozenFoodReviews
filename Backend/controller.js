const {
	addNewFood,
	getAllFoods,
	getOneFood,
} = require("./scripts/frozenFoods");

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

module.exports = {
	tester,
	addFrozenFood,
	getFrozenFoods,
	getFrozenFood,
};
