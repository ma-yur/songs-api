const express = require("express");
const songsRoutes = require("./src/songs/routes");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("hello boiiiiiiiiiii");
});

app.use("/v1/songs", songsRoutes);

app.listen(port, () => console.log(`app listening on port:${port} `));