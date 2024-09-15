import express from "express";
import cors from "cors";
import * as todoController from "./controllers/todoController.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); //for req.body

/**
 * Middleware for logging request headers and body
 */
app.use((req, res, next) => {
	console.log(`---------------------------------`);
	console.log(`req.headers:`, req.headers);
	console.log(`req.body:`, req.body);
	console.log(`-> other log below this line:`);
	next();
});

app.get("/api/todos", async (req, res, next) => {
	try {
		const result = await todoController.getTodos();
		if (result instanceof Error) {
			throw result;
		}
		res.send(result);
	} catch (e) {
		// console.log(e);
		next(e);
	}
});

// app.post("/api/todo", (req, res) => {
// 	const todo = req.body.title;
// 	try {
// 		todos.push(todo);
// 		res.send("Todo added successfully");
// 	} catch (e) {
// 		console.log(e);
// 		throw new Error("Error adding todo");
// 	}
// });

app.delete("/api/todos", async (req, res, next) => {
	try {
		const result = await todoController.deleteTodos();
		if (result instanceof Error) {
			throw result;
		}
		res.send("Todos deleted successfully");
	} catch (e) {
		// console.log(e);
		next(e);
	}
});

app.post("/api/update-todos", async (req, res, next) => {
	const newTodos = req.body.todos;
	try {
		const result = await todoController.updateTodos(newTodos);
		if (result instanceof Error) {
			throw result;
		}
		res.send("Todos updated successfully");
	} catch (e) {
		// console.log(e);
		next(e);
	}
});

app.post("/api/save-todos", async (req, res, next) => {
	try {
		const todos = req.body.todos;
		const result = await todoController.saveTodosToDatabase(todos);
		if (result instanceof Error) {
			throw result;
		}
	} catch (e) {
		// console.log(e);
		next(e);
	}
});

app.get("/api/throw-error", async (req, res, next) => {
	try {
		throw new Error("This is an error!");
	} catch (e) {
		next(e);
	}
});

/**
 * Middleware for error handling response, by defining the specific error for every request
 */
app.use((err, req, res, next) => {
	res.status(500).send(`Internal server error: "${err.message}"`);
});

app.listen(port, () => {
	console.log(`Server app is listening on port ${port}`);
});
