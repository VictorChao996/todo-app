let todos = [];

/**
 * get todos from backend memory, will be replaced with database in future
 * @returns {Array} todos
 */
async function getTodos() {
	return todos;
}

/**
 * update todos in backend memory, will be replaced with database in future
 * @param {Array} newTodos
 */
async function updateTodos(newTodos) {
	todos = newTodos;
	return null;
}

/**
 * delete all todos in backend memory, will be replaced with database in future
 */
async function deleteTodos() {
	todos = [];
	return null;
}

//-----TODO: Implement database functions below --------//
async function getTodosFromDatabase() {
	// return new Error("Error getting todos from databases");
}

async function updateTodosInDatabase() {
	// return new Error("Error updating todos from databases");
}

async function deleteTodosFromDatabase() {
	// return new Error("Error deleting todos from databases");
}

/**
 * Save todos to database
 * @param {Array} newTodos
 */
async function saveTodosToDatabase(newTodos) {
	return true;
	// return new Error("Error saving todos from databases");
}

export { getTodos, updateTodos, deleteTodos, saveTodosToDatabase };
