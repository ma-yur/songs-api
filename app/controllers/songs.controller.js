const db = require("../models");
const Songs = db.songs;
const Playlists = db.playlists;

const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
	if (!req.body.song) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	const song = {
		song: req.body.song,
		artist: req.body.artist,
		year: req.body.year,
	};

	Songs.create(song)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while creating the song.",
			});
		});
};

// Retrieve all songs from the database.
exports.findAll = (req, res) => {
	const song = req.query.song;
	var condition = song ? { song: { [Op.iLike]: `%${song}%` } } : null;

	Songs.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving song.",
			});
		});
};

exports.findOne = (req, res) => {
	const id = req.params.id;

	Songs.findByPk(id)
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find song with id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving song with id=" + id,
			});
		});
};

exports.update = (req, res) => {
	const id = req.params.id;

	Songs.update(req.body, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "song was updated successfully.",
				});
			} else {
				res.send({
					message: `Cannot update song with id=${id}`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Tutorial with id=" + id,
			});
		});
};

exports.delete = (req, res) => {
	const id = req.params.id;

	Songs.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Song was deleted successfully!",
				});
			} else {
				res.send({
					message: `Cannot delete Song with id=${id}. Maybe Songs was not found!`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete Song with id=" + id,
			});
		});
};
exports.addSong = (req, res) => {
	const playlistId = req.params.playlistId;
	const songId = req.params.songId;

	return Playlists.findByPk(playlistId)
		.then((playlist) => {
			if (!playlist) {
				res.send({
					message: `Cannot add song invalid playlist`,
				});
			}
			return Songs.findByPk(songId).then((song) => {
				if (!song) {
					res.send({
						message: `Cannot remove song,invalid song id`,
					});
				}

				playlist.addSong(song);
				res.send(song);
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not add song ",
			});
		});
};

exports.removeSong = (req, res) => {
	const playlistId = req.params.playlistId;
	const songId = req.params.songId;

	return Playlists.findByPk(playlistId)
		.then((playlist) => {
			if (!playlist) {
				res.send({
					message: `Cannot remove song,invalid playlist id`,
				});
			}
			return Songs.findByPk(songId).then((song) => {
				if (!song) {
					res.send({
						message: `Cannot remove song,invalid song id`,
					});
				}

				playlist.removeSong(song);
				res.send(song);
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not remove song ",
			});
		});
};
