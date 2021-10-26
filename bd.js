const { Pool, Client } = require("pg");
require("dotenv").config();

const pool = new Pool({
	user: process.env.USER_NAME,
	host: "fanny.db.elephantsql.com",
	database: "chcbbnqf",
	password: "VcTgnoXwiAPfeAc7Lzb1OIhhUt678B_8",
	port: 5432,
});

module.exports = pool;
