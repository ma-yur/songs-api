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
		res.status(200).json(result.rows);
	});
};

module.exports = {
	getSongs,
	getSongById,
};
