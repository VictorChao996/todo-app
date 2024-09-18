import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

/**
 * generate JWT token
 * @param {Object} payload
 * @returns {string} jwt token or null
 */
function generateJwtToken(payload) {
	let token = null;
	try {
		token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
			expiresIn: "1h",
		});
	} catch (err) {
		console.log(err);
	}

	return token;
}

/**
 * Verify (decoded) JWT token
 * @param {*} token
 * @returns decoded token or null
 */
function verifyJwtToken(token) {
	let decoded = null;
	try {
		decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
	} catch (err) {
		console.log(err);
	}
	return decoded;
}

export { hashPassword, comparePassword, generateJwtToken, verifyJwtToken };
