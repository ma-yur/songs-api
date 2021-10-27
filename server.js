const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// const songsRoutes = require("./src/songs/routes");
const app = express();

var corsOptions = {
	origin: "http://localhost:3001",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.json({ message: "Welcome to Songs api" });
});

const db = require("./app/models");
db.sequelize.sync();

// const run = async () => {
// 	const tag1 = await PlaylistsController.create({
// 		name: "Tag#1",
// 	});
// };
// run();
require("./app/routes/songs.routes")(app);
require("./app/routes/playlists.routes")(app);
require("./app/routes/update.routes")(app);

const port = 3001;
app.listen(port, () => console.log(`app listening on port:${port} `));
