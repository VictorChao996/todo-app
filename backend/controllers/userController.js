import * as dbControllers from "./dbController.js";
import * as tokenUtils from "../utils/tokenUtils.js";

/**
 *
 * @param {string} account
 * @param {string} password
 * @returns {object} user
 */
async function userLogin(account, password) {
	const user = await getUserInfoFromDB(account);

	if (user) {
		const result = tokenUtils.comparePassword(password, user.password);

		if (result) {
			const userInfo = {
				id: user.id,
				account: user.account,
				username: user.username,
				token: "token", //NOTE: token will be generated using jsonwebtoken
			};

			return userInfo;
		}
	}

	return null;
}

/**
 * check if user account exist in database
 * @param {string} account
 * @returns {boolean} true/false
 */
async function checkUserExist(account) {
	const user = await getUserInfoFromDB(account);
	if (user) {
		return true;
	}

	return false;
}

/**
 * get user info by account from database
 * @param {string} account
 * @returns {object} user info or null
 */
async function getUserInfoFromDB(account) {
	const queryString = "SELECT * FROM Users WHERE account = ?";
	const queryParameters = [account];

	const result = await dbControllers.executeQuery(
		queryString,
		queryParameters
	);

	if (result) {
		return result?.[0] ?? null;
	}

	return null;
}

/**
 * create user in database
 * @param {string} account
 * @param {string} password
 * @param {string} username
 * @param {string} description
 * @returns {object} user info or null
 */
async function createUser(account, password, username, description) {
	const hashed_password = tokenUtils.hashPassword(password);
	const queryString =
		"INSERT INTO Users (account, password, username, description) VALUES (?, ?, ?, ?)";
	const queryParameters = [account, hashed_password, username, description];

	const result = await dbControllers.executeQuery(
		queryString,
		queryParameters
	);

	if (result?.affectedRows) {
		const userInfo = {
			id: result.insertId,
			account: account,
			username: username,
			description: description ?? "",
		};
		return userInfo;
	}

	return null;
}

export { userLogin, createUser, checkUserExist };
