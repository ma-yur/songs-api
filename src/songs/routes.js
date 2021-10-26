const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
	res.send("holooo from routes");
});

module.exports = router;
