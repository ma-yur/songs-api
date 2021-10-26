const pool = require("../../bd");

const getSongs = (req, res) => {
	pool.query("SELECT * FROM songs", (err, result) => {
		if (err) throw err.message;
		res.status(200).json(result.rows);
	});
};
const getSongById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(`SELECT * FROM songs Where id=${id}`, (err, result) => {
		if (err) throw err.message;
		if (!result.rowCount)
			res.status(404).send("no resource found with given id");
		res.status(200).json(result.rows);
	});
};
const addSong = (req, res) => {
	const { song, artist, year } = req.body;
	pool.query(
		`INSERT INTO songs(song,artist,year) VALUES('${song}','${artist}',${year})`,
		(err, result) => {
			if (err) throw err;
			res.status(201).send("new song added successfully");
		}
	);
};

const removeSong = (req, res) => {
	const id = req.params.id;
	console.log(id);
	pool.query(`DELETE FROM songs WHERE id=${id}`, (err, result) => {
		if (err) throw err;
		if (!result.rowCount) res.status(204).send("no song found with given id");
		res.status(200).send("song removed successfully");
	});
};

module.exports = {
	getSongs,
	getSongById,
	addSong,
	removeSong,
};
