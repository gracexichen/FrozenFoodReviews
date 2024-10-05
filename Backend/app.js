const express = require("express");
const cors = require("cors");
const app = express();
const { deleteStaleImages } = require("./scripts/cleanup");
require("./bin/www");

setInterval(deleteStaleImages, 10 * 1000);

// Middleware
app.use(
	cors({
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		credentials: true,
	})
);
app.use(express.json());

// Import and use the router
const router = require("./route");

app.use(router);

// Start server
app.listen(4000, "0.0.0.0", () => {
	console.log(`Server is running on port 4000.`);
});
