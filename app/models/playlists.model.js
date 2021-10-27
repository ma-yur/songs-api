module.exports = (sequelize, DataTypes) => {
	const playlists = sequelize.define("playlists", {
		name: {
			type: DataTypes.STRING,
		},
	});

	return playlists;
};
