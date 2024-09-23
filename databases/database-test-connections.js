import mysql from "mysql2/promise";

const connectionConfig = {
	host: "localhost",
	user: "root",
	password: "root",
	database: "todo_db",
};

const connection = await mysql.createConnection(connectionConfig);

try {
	const [results] = await connection.query("SHOW DATABASES;");

	// console.log(results);
	const [results2] = await connection.query(
		`USE ${connectionConfig.database};`
	);
	// console.log(results2);

	console.log(
		`DB connection to host "${connectionConfig.host}" database "${connectionConfig.database}" by User: "${connectionConfig.user}" success...`
	);
} catch (e) {
	console.log(e);
}

await connection.end(); //close connection
