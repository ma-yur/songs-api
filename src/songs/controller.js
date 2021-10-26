const pool = require("../../bd");

const getSongs = (req, res) => {
	pool.query("SELECT * FROM songs", (err, result) => {
		if (err) throw err.message;
		res.status(200).json(result.rows);
	});
};

module.exports = {
	getSongs,
};
