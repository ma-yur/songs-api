const { Router } = require("express");

const { getSongs, getSongById, addSong, removeSong } = require("./controller");

const router = Router();

router.get("/", getSongs);
router.get("/:id", getSongById);

router.post("/", addSong);

router.delete("/:id", removeSong);

module.exports = router;
