const { Pool, Client } = require("pg");
const pool = new Pool({
	user: "chcbbnqf",
	host: "fanny.db.elephantsql.com",
	database: "chcbbnqf",
	password: "VcTgnoXwiAPfeAc7Lzb1OIhhUt678B_8",
	port: 5432,
});

module.exports = pool;
