const { Router } = require("express");

const { getSongs, getSongById, addSong } = require("./controller");

const router = Router();

router.get("/", getSongs);
router.get("/:id", getSongById);

router.post("/", addSong);

module.exports = router;
