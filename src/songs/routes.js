const { Router } = require("express");

const { getSongs } = require("./controller");

const router = Router();

router.get("/", getSongs);

module.exports = router;
