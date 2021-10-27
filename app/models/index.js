const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: 0,

	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.songs = require("./songs.model.js")(sequelize, Sequelize);
db.playlists = require("./playlists.model.js")(sequelize, Sequelize);

db.playlists.belongsToMany(db.songs, {
	through: "playlists_songs",
	as: "songs",
	foreignKey: "playlist_id",
});
db.songs.belongsToMany(db.playlists, {
	through: "playlists_songs",
	as: "playlists",
	foreignKey: "song_id",
});

module.exports = db;
