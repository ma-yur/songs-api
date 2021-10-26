const { Router } = require("express");

const {
	getSongs,
	getSongById,
	addSong,
	removeSong,
	updateSongById,
} = require("./controller");

const router = Router();

router.get("/", getSongs);
router.get("/:id", getSongById);

router.post("/", addSong);

router.put("/:id", updateSongById);

router.delete("/:id", removeSong);

module.exports = router;
