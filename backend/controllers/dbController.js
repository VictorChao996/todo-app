import mysql from "mysql2/promise";

const dbConfig = {
	host: "localhost",
	user: "root",
	password: "root",
	database: "todo_db",
};

const poolConfig = {
	...dbConfig,
	waitForConnections: true,
	connectionLimit: 10,
	idleTimeout: 10000,
	queueLimit: 0,
	enableKeepAlive: true,
};

const connection_pool = mysql.createPool(poolConfig);

/**
 * Check if connection makes from connection_pool to database is successful
 * @returns {boolean} true/false
 */
async function checkConnection() {
	try {
		const connetion = await connection_pool.getConnection();
		await connetion.query("SHOW DATABASES;");
		console.log("Database connected");

		connetion.release();
		return true;
	} catch (e) {
		console.log(e);
		console.log("Database connection failed");
	}
	return false;
}

/**
 * Query wrapper function for connection_pool.query
 * - add rules for SQL string here (ex. prevent SQL injection)
 * - limit word: DROP
 * @param {string} query
 * @param {Array} params
 * @returns {Array} rows
 */
async function executeQuery(query, params) {
	//check if query contain specific words
	const dropRegex = /DROP/i;
	if (dropRegex.test(query)) {
		console.log("Warning: 'DROP' is not allowed.");
		return null;
	}

	try {
		const conn = await connection_pool.getConnection();
		const [rows] = await conn.query(query, params);
		conn.release();

		return rows;
	} catch (e) {
		console.log(e);
	}

	return null;
}

export { checkConnection, executeQuery };
