module.exports = (app) => {
	const songs = require("../controllers/songs.controller.js");

	var router = require("express").Router();

	router.put("/:playlistId/:songId", songs.addSong);
	router.delete("/:playlistId/:songId", songs.removeSong);

	app.use("/v1/song", router);
};
