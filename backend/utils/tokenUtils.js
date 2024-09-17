import bcrypt from "bcrypt";

const saltRounds = 10;

/**
 * generate hashed password
 * @param {string} password
 * @returns {string} hash_password
 */
function hashPassword(password) {
	const hash_password = bcrypt.hashSync(password, saltRounds);
	console.log(hash_password);

	return hash_password;
}

/**
 * Compare password with hashed password
 * @param {string} password
 * @param {string} hash
 * @returns {boolean} result
 */
function comparePassword(password, hash) {
	const result = bcrypt.compareSync(password, hash);
	console.log(result);

	return result;
}

export { hashPassword, comparePassword };
