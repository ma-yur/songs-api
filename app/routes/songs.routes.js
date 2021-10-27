module.exports = (app) => {
	const songs = require("../controllers/songs.controller.js");

	var router = require("express").Router();

	// Create a new Tutorial
	router.post("/", songs.create);

	// Retrieve all songs
	router.get("/", songs.findAll);

	// Retrieve all published songs
	// router.get("/published", songs.findAllPublished);

	// Retrieve a single Tutorial with id
	router.get("/:id", songs.findOne);

	// Update a Tutorial with id
	router.put("/:id", songs.update);

	// Delete a Tutorial with id
	router.delete("/:id", songs.delete);

	// Create a new Tutorial
	router.delete("/", songs.deleteAll);

	app.use("/v1/songs", router);
};
