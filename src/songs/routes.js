const { Router } = require("express");

const { getSongs, getSongById } = require("./controller");

const router = Router();

router.get("/", getSongs);
router.get("/:id", getSongById);

module.exports = router;
