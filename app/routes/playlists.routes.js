module.exports = (app) => {
	const playlists = require("../controllers/playlists.controller.js");

	var router = require("express").Router();

	router.post("/", playlists.create);

	router.get("/", playlists.findAll);

	router.get("/:id", playlists.findOne);

	// router.put("/:playlist_id/:song_id", playlists.update);

	// router.delete("/:id", playlists.delete);

	app.use("/v1/playlists", router);
};
