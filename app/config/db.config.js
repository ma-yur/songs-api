// require("dotenv").config();

module.exports = {
	USER: "chcbbnqf",
	HOST: "fanny.db.elephantsql.com",
	DB: "chcbbnqf",
	PASSWORD: "VcTgnoXwiAPfeAc7Lzb1OIhhUt678B_8",
	dialect: "postgres",
	port: 5432,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
