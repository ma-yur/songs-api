const db = require("../models");
const Songs = db.songs;
const Playlists = db.playlists;

exports.create = (req, res) => {
	if (!req.body.name) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	const playlist = {
		name: req.body.name,
	};
	Playlists.create(playlist)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the Tutorial.",
			});
		});
};
exports.findAll = (req, res) => {
	const name = req.query.name;
	var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

	Playlists.findAll({ where: condition })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving tutorials.",
			});
		});
};
exports.findOne = (req, res) => {
	const id = req.params.id;

	Playlists.findByPk(id,{
    include: [
      {
        model: Songs,
        as: "songs",
        attributes: ["id", "song", "artist","year"],
        through: {
          attributes: [],
        }
      },
    ],

  })
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).send({
					message: `Cannot find playlist with id=${id}.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error retrieving Tutorial with id=" + id,
			});
		});
};
