module.exports = (sequelize, Sequelize) => {
	const songs = sequelize.define("songs", {
		song: {
			type: Sequelize.STRING,
		},
		artist: {
			type: Sequelize.STRING,
		},
		year: {
			type: Sequelize.INTEGER,
		},
	});

	return songs;
};
