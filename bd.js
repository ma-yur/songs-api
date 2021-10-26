const { Pool, Client } = require("pg");
const connectionString =
	"postgres://chcbbnqf:VcTgnoXwiAPfeAc7Lzb1OIhhUt678B_8@fanny.db.elephantsql.com/chcbbnqf";
const pool = new Pool({
	connectionString,
});

module.exports = pool;
